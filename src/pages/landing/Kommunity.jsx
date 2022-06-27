// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { AiFillHeart } from 'react-icons/ai';

const Kommunity = ({ cities }) => {
    return (
        <>
            <section className="py-5 bg-light border-top border-bottom border-light">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <h1 className="mt-0">
                                    <AiFillHeart />
                                </h1>
                                <h3 className="text-dark">
                                    Meet our <span className="landing-titles-span">Kommunity</span>
                                </h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-4">
                        {cities.map((item, index) => {
                            return (
                                <Col lg={3} key={index} className="mb-4">
                                    <div className="demo-box text-center mt-3 mt-lg-0">
                                        <img src={item.image} alt="" className="img-fluid shadow-sm rounded" />
                                        <h5 className="mt-3 f-17">{item.city}</h5>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-dark w-25" data-mdb-ripple-color="dark">
                            View stories
                        </button>
                    </Row>
                </Container>
            </section>
        </>
    );
};
Kommunity.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
        })
    ),
};
export default Kommunity;
