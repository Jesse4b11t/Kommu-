import React, { useEffect, useState } from 'react';
import checkoutService from '../../services/checkoutService';
import debug from 'sabio-debug';
import PropTypes from 'prop-types';
import PCard from './PCard';

const Checkout = () => {
    const _logger = debug.extend('checkout');
    const [product, setProduct] = useState({
        productArr: [],
        productComp: [],
    });
    useEffect(() => {
        checkoutService.GetProducts().then(onGetProductsSuccess).catch(onGetProductsError);
    }, []);

    const onGetProductsSuccess = (response) => {
        setProduct((prevState) => {
            let newState = { ...prevState };

            newState.productArr = response.item.data;
            newState.productComp = newState.productArr.map(mapProducts);

            return newState;
        });
    };

    const mapProducts = (product) => {
        if (product.active === true) {
            return <PCard key={product.id} product={product} image={product.images[0]} sendData={sendData} />;
        }
    };

    const onGetProductsError = (response) => {
        _logger({ error: response });
    };

    const sendData = (product) => {
        _logger({ Product: product });
        checkoutService.navigateToCheckout(product).then(onNavigationSuccess).catch(onNavigationError);
    };

    const onNavigationSuccess = (response) => {
        _logger({ success: response.item.url });
        window.location.replace(response.item.url);
    };

    const onNavigationError = (response) => {
        _logger({ Error: response });
    };
    _logger(product);
    return (
        <React.Fragment>
            <div className="container my-3">
                <div className="row">{product.productArr.map(mapProducts)}</div>
            </div>
        </React.Fragment>
    );
};

Checkout.propType = {
    message: PropTypes.string.isRequired,
};
export default Checkout;
