import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Hero = () => {
    return (
        <section className="hero-section-custom">
            <Container>
                <Row className="align-items-center text-end justify-content-end">
                    <Col md={8}>
                        <div className="mt-md-4">
                            <div>
                                <span className="ms-1 fs-2 text-white fw-light">Welcome to Kommu</span>
                            </div>
                            <p className="text-white fw-bold mb-4 mt-3 fw-bold hero-title">
                                A Private Home Swapping Community
                            </p>
                        </div>
                    </Col>
                    <Col md={{ span: 5, offset: 2 }}>
                        <div className="text-md-end mt-3 mt-md-0">
                            <Link to="/" className="btn  btn-success m-1">
                                Apply now
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

Hero.propType = {
    currentUser: PropTypes.shape({}),
};
export default Hero;
