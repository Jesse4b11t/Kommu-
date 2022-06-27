import React from 'react';
import { PropTypes } from 'prop-types';

const PCard = (props) => {
    const product = props.product;

    const onCheckout = (e) => {
        e.preventDefault();
        props.sendData(props.product);
    };
    return (
        <div className="col-4" key={product.id}>
            <div className="card border rounded">
                <div
                    className="w-100"
                    style={{
                        backgroundImage: 'url(' + props.image + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height: '5em',
                    }}></div>
                <div className="card-body">
                    <h4 className="card-title">{product.name}</h4>
                    <p className="card-text">{product.description}</p>
                    <form method="POST">
                        <button type="submit" className="btn btn-success" onClick={onCheckout}>
                            Checkout
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

PCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    sendData: PropTypes.func.isRequired,
    image: PropTypes.string,
};
export default PCard;
