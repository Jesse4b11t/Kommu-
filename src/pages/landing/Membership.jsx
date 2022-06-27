import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import membershipProcess from '../../assets/images/membership-process.svg';
import { BsFillPersonPlusFill } from 'react-icons/bs';

const Membership = ({ membershipSteps }) => {
    return (
        <>
            <section className="py-5 bg-light">
                <Container>
                    <Col>
                        <div className="text-center mb-5">
                            <h1 className="mt-0">
                                <BsFillPersonPlusFill />
                            </h1>
                            <h3 className="text-dark">
                                Membership <span className="landing-titles-span">process</span>
                            </h3>
                        </div>
                    </Col>
                    <Row className="m-2 align-items-center">
                        <Col lg={6}>
                            {membershipSteps.map((item, index) => {
                                return (
                                    <div key={index} className="m-4 d-flex gap-4 align-items-center">
                                        <img src={item.icon} alt="icon" height={40} />
                                        <span className="text-dark fs-4">{item.text}</span>
                                    </div>
                                );
                            })}
                        </Col>

                        <Col lg={6}>
                            <img src={membershipProcess} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                    <Col className="mt-5 d-flex justify-content-center">
                        <div className="text-dark fs-4 w-75 text-center">
                            Once your background check and application review are completed, you are added to the
                            Kommunity. You’ll have a profile page for other travelers to find and connect with you and
                            you can explore other members’ profiles. Our concierge service helps find you your next
                            swap.
                        </div>
                    </Col>
                    <Col className="mt-3 d-flex justify-content-center">
                        <Link to="/" className="btn btn-success m-1">
                            Apply now
                        </Link>
                    </Col>
                </Container>
            </section>
        </>
    );
};

Membership.propTypes = {
    membershipSteps: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ),
};

export default Membership;
