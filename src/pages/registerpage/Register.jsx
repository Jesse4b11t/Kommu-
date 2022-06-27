import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import userService from '../../services/userService';
import logger from 'sabio-debug';
import Logo from '../../assets/images/kommusmalllogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registerSchema from '../../schema/registerSchema';

import AccountLayout from './AccountLayout';

const BottomLink = () => {
    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    Already have an account?
                    <Link to={'/login'} className="text-muted ms-1">
                        <b>Sign In</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Register = () => {
    const _logger = logger.extend('App_Register');
    const navigate = useNavigate();

    const [registerState] = useState({
        loading: '',
        email: '',
        password: '',
        userLoggedIn: '',
    });

    const onSubmit = (formData) => {
        let payload = {
            email: formData.email,
            password: formData.password,
        };
        _logger('Payload data:', payload);
        userService.add(payload).then(onRegisterSuccess).catch(onRegisterError);
    };

    const onRegisterSuccess = () => {
        _logger('Registration successful!');
        navigate('/login', {
            state: { alert: 'register', type: 'ALERT_PASS' },
        });
    };

    const onRegisterError = (message) => {
        if (message.toString() === 'Error: Request failed with status code 500') {
            toast.warning('Registration failed- an account already exists with the given username.');
        }
        _logger('Registration failed: ', message);
    };

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <ToastContainer />
            <div className="text-center w-75 m-auto mb-4">
                <a href="/">
                    <img src={Logo} alt="Kommu logo" width="12%" />
                </a>
                <h1 className="text-dark text-center mt-3 display-6">Welcome!</h1>
                <p className="text-muted">Register for Kommu below:</p>
            </div>

            <Formik
                enableReinitialize={true}
                initialValues={registerState}
                onSubmit={onSubmit}
                validationSchema={registerSchema}>
                <Form>
                    <div>
                        <Field
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            autoComplete="username"
                            style={{ height: '50px', fontSize: '1.2em' }}
                        />
                        <div>
                            &nbsp;
                            <ErrorMessage name="email" component="span" className="text-muted" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <Field
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            autoComplete="username"
                            style={{ height: '50px', fontSize: '1.2em' }}
                        />
                        <div>
                            &nbsp;
                            <ErrorMessage name="password" component="span" className="text-muted" />
                        </div>
                    </div>
                    <div className="mb-3 text-center">
                        <Button
                            className="col-12 shadow-none border-0 rounded-pill"
                            type="submit"
                            style={{ backgroundColor: '#634e42', height: '40px', fontSize: '1.2em' }}>
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </Formik>
        </AccountLayout>
    );
};

export default Register;
