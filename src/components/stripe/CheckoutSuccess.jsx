import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
const CheckoutSuccess = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Row>
                    <Col xl={3} lg={4}></Col>

                    <Col xl={6} lg={7}>
                        <Card className="text-center">
                            <Card.Header className="bg-success text-center">Payment Was Successful</Card.Header>
                            <Card.Body>
                                <div>Return to Ecommerce Dashboard</div>
                                <button className="btn btn-success ms-2">
                                    <i className="mdi mdi-autorenew">Return</i>
                                </button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    );
};

export default CheckoutSuccess;
