import React from 'react';
import Checkout from '../../components/stripe/Checkout';
import { Card } from 'react-bootstrap';

const Products = () => {
    return (
        <>
            <Card>
                <Card.Header>
                    <h3>Payment Plans</h3>
                </Card.Header>
                <Card.Body>
                    <Checkout />
                </Card.Body>
            </Card>
        </>
    );
};

export default Products;
