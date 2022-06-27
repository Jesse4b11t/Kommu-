// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa';

import logo from '../assets/images/kommumainlogo.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-dark py-5">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img src={logo} alt="" className="logo-dark" height="70" />
                            <p className="text-muted mt-4">A private home swapping community.</p>

                            <ul className="social-list list-inline mt-3">
                                <li className="list-inline-item text-center">
                                    <a
                                        href="/"
                                        className="social-list-item border-primary text-primary d-flex align-items-center justify-content-center">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li className="list-inline-item text-center">
                                    <a
                                        href="/"
                                        className="social-list-item border-danger text-danger d-flex align-items-center justify-content-center">
                                        <FaGoogle />
                                    </a>
                                </li>
                                <li className="list-inline-item text-center">
                                    <a
                                        href="/"
                                        className="social-list-item border-info text-info d-flex align-items-center justify-content-center">
                                        <FaTwitter />
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mt-3 mt-lg-0">
                            <h5 className="text-light">Company</h5>

                            <ul className="list-unstyled ps-0 mb-0 mt-3">
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        About Us
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        FAQs
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        Terms
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        Privacy
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mt-3 mt-lg-0">
                            <h5 className="text-light">Sign up</h5>

                            <ul className="list-unstyled ps-0 mb-0 mt-3">
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        Profile Creation
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        Photo Upload
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col lg={2} className="mt-3 mt-lg-0">
                            <h5 className="text-light">Support</h5>
                            <ul className="list-unstyled ps-0 mb-0 mt-3">
                                <li className="mt-2">
                                    <a href="/contactus" className="text-muted">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="mt-2">
                                    <a href="/" className="text-muted">
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mt-5">
                                <p className="text-muted mt-4 text-center mb-0">© 2022 Kommu</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;
