import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import smallTown from '../../assets/images/small-town.svg';
import { BsQuestionCircleFill } from 'react-icons/bs';

const HowItWorks = ({ howItWorksItems }) => {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Col>
                        <div className="text-center">
                            <h1 className="mt-0">
                                <BsQuestionCircleFill />
                            </h1>
                            <h3 className="text-dark">
                                How Kommu <span className="landing-titles-span">works</span>
                            </h3>
                            <p className="text-muted mt-2">We&#39;re here to get you there</p>
                        </div>
                    </Col>
                    <Row className="m-2 align-items-center">
                        <Col lg={6}>
                            <img src={smallTown} className="img-fluid" alt="" />
                        </Col>

                        <Col lg={6}>
                            {howItWorksItems.map((item, index) => {
                                return (
                                    <div key={index} className="m-4 d-flex gap-4 align-items-center">
                                        <img src={item.icon} alt="icon" height={40} />
                                        <span className="text-dark fs-4">{item.text}</span>
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

HowItWorks.propTypes = {
    howItWorksItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ),
};

export default HowItWorks;
