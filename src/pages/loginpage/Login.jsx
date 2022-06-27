import React, { useEffect, useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import logger from 'sabio-debug';
import userService from '../../services/userService';
import Logo from '../../assets/images/kommumainlogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetAuth } from '../../redux/actions';
import loginSchema from '../../schema/loginSchema';

import AccountLayout from './AccountLayout';

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t("Don't have an account?")}{' '}
                    <Link to={'/register'} className="text-muted ms-1">
                        <b>{t('Sign Up')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Login = (props) => {
    const _logger = logger.extend('App_Login');
    const navigate = useNavigate();
    const { state } = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetAuth());
    }, [dispatch]);

    useEffect(() => {
        _logger(props.currentUser);
        if (state?.type === 'ALERT_PASS') {
            if (state.alert === 'register') {
                window.history.replaceState({}, document.title); // clears location state
                toast.success('Registration successful! Login with your new username and password.');
            }
        }
    }, []);

    const [loginState] = useState({
        loading: '',
        userName: '',
        password: '',
        userLoggedIn: '',
    });

    const onSubmit = (formData) => {
        let payload = {
            userName: formData.userName,
            password: formData.password,
        };
        _logger('Payload data:', payload);
        userService.login(payload).then(onLoginSuccess).catch(onLoginError);
    };

    const onLoginSuccess = () => {
        _logger('Logged in successfully.');
        navigate('/');
    };

    const onLoginError = (message) => {
        if (message.toString() === 'Error: Request failed with status code 500') {
            toast.warning('Login failed: Invalid username or password.');
        }
        _logger('Login failed: ' + message);
    };

    return (
        <>
            {(loginState.userLoggedIn || loginState.user) && navigate('/')}
            <ToastContainer />
            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center m-auto mb-5">
                    <a href="/">
                        <img src={Logo} alt="Kommu logo" width="60%" />
                    </a>
                </div>
                <Formik
                    enableReinitialize={true}
                    initialValues={loginState}
                    onSubmit={onSubmit}
                    validationSchema={loginSchema}>
                    <Form>
                        <div>
                            <Field
                                type="text"
                                name="userName"
                                className="form-control"
                                placeholder="Email*"
                                autoComplete="username"
                                style={{ height: '50px', fontSize: '1.2em' }}
                            />
                            <div>
                                &nbsp;
                                <ErrorMessage name="userName" component="span" className="text-muted" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <Field
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password*"
                                autoComplete="current-password"
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
                                style={{ backgroundColor: '#634e42', height: '40px', fontSize: '1.2em' }}
                                disabled={loginState.loading}
                                onClick={navigate}>
                                Sign in
                            </Button>
                        </div>
                        <div className="text-center">
                            <p className="text-muted">
                                By proceeding, you also agree to the Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </Form>
                </Formik>
            </AccountLayout>
        </>
    );
};

Login.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool,
    }),
};

export default Login;
