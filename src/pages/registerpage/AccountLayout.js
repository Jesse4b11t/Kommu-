import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AccountLayout = ({ bottomLinks, children }) => {
    useEffect(() => {
        if (document.body) document.body.classList.add('authentication-bg');

        return () => {
            if (document.body) document.body.classList.remove('authentication-bg');
        };
    }, []);

    return (
        <>
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} xxl={4}>
                            <Card>
                                <Card.Body className="p-4">{children}</Card.Body>
                            </Card>

                            {bottomLinks}
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

AccountLayout.propTypes = {
    bottomLinks: PropTypes.element,
    children: PropTypes.arrayOf(PropTypes.element),
};

export default AccountLayout;
