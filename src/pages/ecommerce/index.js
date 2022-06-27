import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Products from './Products';
import PropTypes from 'prop-types';
import debug from 'sabio-debug';
import ecommerceService from '../../services/ecommerceService';

const EcommerceDashboardPage = (props) => {
    const _logger = debug.extend('nav');
    const [stripeAccount, setStripeAccount] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        _logger({ local: location });
        ecommerceService.getCurrentUser().then(onGetCurrentUserSuccess).catch(onGetCurrentUserError);
    }, []);

    const onGetCurrentUserSuccess = (response) => {
        setCurrentUser((prevState) => {
            let newState = { ...prevState };

            newState = response.item;

            return newState;
        });
        _logger({ success: response.item });

        ecommerceService.getPaymentAccount(response.item.id).then(onPaymentAccountSuccess).catch(onPaymentAccountError);
    };

    const onPaymentAccountSuccess = (response) => {
        _logger({ success: response });

        if (response.item.pagedItems === null) {
            setStripeAccount((prevState) => {
                let newState = { ...prevState };

                newState = false;

                return newState;
            });
        } else {
            setStripeAccount((prevState) => {
                let newState = { ...prevState };

                newState = true;

                return newState;
            });
        }
    };

    const onPaymentAccountError = (response) => {
        _logger({ error: response });
    };

    const onGetCurrentUserError = (response) => {
        _logger({ error: response });
    };

    const newAccount = (e) => {
        e.preventDefault();

        navigate('stripe/new', { state: currentUser });
    };

    return (
        <div className="container">
            <Row>
                <Col>
                    <div className="page-title-box border-bottom">
                        <div className="page-title-right">
                            <form>
                                <div className="input-group"></div>

                                {stripeAccount !== true ? (
                                    <button className="btn btn-primary" onClick={newAccount}>
                                        <i className="mdi mdi-autorenew">New Account</i>
                                    </button>
                                ) : (
                                    currentUser.name
                                )}
                            </form>
                        </div>
                        <h4 className="page-title">Ecommerce</h4>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xl={3} lg={4}></Col>

                <Col xl={9} lg={8}>
                    <Products currentUser={props.currentUser} />
                </Col>
            </Row>

            <Row>
                <Col></Col>
            </Row>

            <Row>
                <Col xl={4} lg={12}></Col>
                <Col xl={4} lg={6}></Col>
                <Col xl={4} lg={6}></Col>
            </Row>

            <Row>
                <Col xl={4} lg={6}></Col>
                <Col xl={4} lg={6}></Col>
                <Col xl={4} lg={6}></Col>
            </Row>
        </div>
    );
};

EcommerceDashboardPage.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
    }),
};
export default EcommerceDashboardPage;
