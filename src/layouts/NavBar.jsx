import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import userService from '../services/userService';
import logger from 'sabio-debug';
import logo from '../assets/images/kommumainlogo.png';

const NavBar = (props) => {
    const navigate = useNavigate();
    const _logger = logger.extend('App_NavBar');
    const onLogoutClick = () => {
        userService.logout().then(onLogoutSuccess).catch(onLogoutError);
    };

    const onLogoutSuccess = () => {
        _logger('Logged out successfully.');
        navigate('login');
    };

    const onLogoutError = (message) => {
        _logger('Logout failed: ', message);
    };

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="py-lg-3 navbar" variant="light">
                <Container>
                    <Navbar.Brand href="/" className="me-lg-5">
                        <img src={logo} alt="" className="logo-dark" height="50px" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <i className="mdi mdi-menu"></i>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav as="ul" className="me-auto align-items-center">
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/listing/search">View Listings</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/dashboard/ecommerce">Pricing</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/faq">FAQs</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/contactus">Contact</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/profile">Profile</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/location">Location</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/verification">Location Verification</Nav.Link>
                            </Nav.Item>

                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/AboutUs">About Us</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mx-lg-1">
                                <Nav.Link href="/externallinks">External Links</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Nav className="ms-auto align-items-center">
                            {props.currentUser?.isLoggedIn ? (
                                <Nav.Item className="me-0">
                                    <span className="text-dark">Welcome back, {props.currentUser.email}!</span>
                                    <button
                                        type="button"
                                        className="mx-3 btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex"
                                        onClick={onLogoutClick}>
                                        Log Out
                                    </button>
                                </Nav.Item>
                            ) : (
                                <Nav.Item className="me-0">
                                    <Nav.Link href="/login" target="_self" className="d-lg-none">
                                        Log In
                                    </Nav.Link>
                                    <Link
                                        to="/login"
                                        target="_self"
                                        className="mx-3 btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex">
                                        Log In
                                    </Link>
                                </Nav.Item>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

NavBar.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        roles: PropTypes.arrayOf(PropTypes.string),
        email: PropTypes.string,
        isLoggedIn: PropTypes.bool,
    }),
};

export default NavBar;
