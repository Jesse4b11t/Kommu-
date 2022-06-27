import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage, Form as FF } from 'formik';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import debug from 'sabio-debug';
import { ToastContainer, toast } from 'react-toastify';

import contactUsService from '../../services/contactUsService';
import validation from '../../schema/contactUsSchema';

const _logger = debug.extend('ContactForm');

const ContactForm = () => {
    const [addContactFormData] = useState({
        formData: {
            subject: 'Contact Us',
            email: { email: '', name: '' },
            plainText: 'plain',
            body: '',
        },
    });

    const handleSubmit = (values) => {
        _logger('Submit button clicked', values);

        contactUsService.createEmail(values).then(onCreateEmailSuccess).catch(onCreateEmailError);
    };

    const onCreateEmailSuccess = (response) => {
        toast.success('Successful Submit!');
        _logger('oncreateEmailSuccess response ->', response);
    };

    const onCreateEmailError = (err) => {
        toast.error('Unuccessful Submission');
        _logger('error', err);
    };
    return (
        <>
            <Container>
                <ToastContainer />
                <Row>
                    <Col>
                        <div className="text-center">
                            <h3>
                                Get In <span className="text-primary">Touch</span>
                            </h3>
                            <p className="text-muted mt-2">
                                Please fill out the following form and we will get back to you shortly. For more
                                <br />
                                information please contact us.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{ marginTop: 25, maxWidth: '600px' }}>
                <Row className="mx-auto">
                    <Col style={{ paddingleft: 10, paddingright: 10 }}>
                        <span className="fw-bold">Customer Support:</span>
                        <br /> <span className="d-block mt-1">+1 234 56 7894</span>
                    </Col>

                    <Col style={{ paddingleft: 10, paddingright: 10 }}>
                        <span className="fw-bold">Email Address:</span>
                        <br /> <span className="d-block mt-1">info@gmail.com</span>
                    </Col>
                    <Col style={{ paddingleft: 10, paddingright: 10 }}>
                        <span className="fw-bold">Office Address:</span>
                        <br />
                        <span className="d-block mt-1">4461 Cedar Street Moro, AR 72368</span>
                    </Col>
                    <Col style={{ paddingleft: 10, paddingright: 0 }}>
                        <span className="fw-bold">Office Time:</span>
                        <br /> <span className="d-block mt-1">9:00AM To 6:00PM</span>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ marginTop: 40, maxWidth: '600px' }}>
                <Formik
                    enableReinitialize={true}
                    initialValues={addContactFormData.formData}
                    onSubmit={handleSubmit}
                    validationSchema={validation}>
                    <Row className="row d-flex justify-content-center">
                        <Col className="col-md-12">
                            <FF>
                                <Form.Group className="mb-3 ">
                                    <label htmlFor="name">Name</label>
                                    <Field type="text" name="email.name" className="form-control" placeholder="name" />
                                    <ErrorMessage name="email.name" component="div" className="" />
                                </Form.Group>
                                <Form.Group className="mb-3 ">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="text"
                                        name="email.email"
                                        className="form-control"
                                        placeholder="example@mail.com"
                                    />
                                    <ErrorMessage name="email.email" component="div" className="" />
                                </Form.Group>
                                <Form.Group className="mb-3 ">
                                    <label htmlFor="body">Message</label>
                                    <Field
                                        component="textarea"
                                        name="body"
                                        className="form-control"
                                        placeholder="message..."
                                    />
                                    <ErrorMessage name="body" component="div" className="" />
                                </Form.Group>

                                <Row style={{ marginBottom: 15 }} className="justify-content-center">
                                    <Button type="submit" className="primary-btn submit justify-content-center w-25">
                                        Submit
                                    </Button>
                                </Row>
                            </FF>
                        </Col>
                    </Row>
                </Formik>
            </Container>
        </>
    );
};

ContactForm.propTypes = {
    contactForm: PropTypes.shape({
        subject: PropTypes.string.isRequired,
        email: PropTypes.shape({ email: PropTypes.string.isRequired, name: PropTypes.string.isRequired }),
        plaintext: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }),
};

export default ContactForm;
