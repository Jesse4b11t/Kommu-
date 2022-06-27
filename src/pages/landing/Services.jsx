import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillHouseDoorFill } from 'react-icons/bs';

const Services = () => {
    return (
        <>
            <section className="py-3">
                <Container>
                    <Row className="py-4">
                        <Col>
                            <div className="text-center">
                                <h1 className="mt-0">
                                    <BsFillHouseDoorFill />
                                </h1>
                                <h3 className="text-dark">
                                    Living <span className="landing-titles-span">anywhere</span> has never been{' '}
                                    <span className="landing-titles-span">easier</span>
                                </h3>
                                <p className="text-muted mt-2">
                                    Kommunity members gain access to homes around the world for a fraction of the cost
                                    of
                                    <br />
                                    other vacation rental services
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
