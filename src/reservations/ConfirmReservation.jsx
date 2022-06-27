import React, { useEffect } from 'react';
import * as reservationService from '../services/reservationService';
import debug from 'sabio-debug';
import { Card } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const _logger = debug.extend('Confirmation');

function ConfirmReservation() {
    const { state } = useLocation();
    _logger(state, 'payload for confirmation');

    const { listingIdParams } = useParams();

    useEffect(() => {
        if (state?.type === 'confirmType' && state?.payload) {
            const updatelistingInfo = state.payload;
            toast.success('Reserved');
            _logger(updatelistingInfo);
        } else {
            reservationService.getListingResById(listingIdParams).then(getByIdSuccess).catch(getByIdError);
        }
    }, []);

    const getByIdSuccess = (response) => {
        _logger(response.item);
    };
    const getByIdError = (err) => {
        _logger(err);
    };

    return (
        <React.Fragment>
            <ToastContainer />
            <div className="container">
                <h1>Your reservation is confirmed</h1>
                <Card>
                    <Card.Body className="card-body">
                        <Card.Text className="card-title"></Card.Text>
                        <Card.Subtitle className="card-title">
                            {' '}
                            {/* You are going to {state.payload.payload.locationData.cityName}! */}
                        </Card.Subtitle>
                        <Card.Img
                            src={state.payload.payload.images[2]}
                            className="card-img-top"
                            alt="..."
                            style={{ width: '286px', height: '286px' }}
                        />
                        <Card.Title className="card-text">Check-In</Card.Title>
                        <Card.Subtitle className="card-text">
                            {state.listingResInfo.dateCheckIn} anytime after 3pm
                        </Card.Subtitle>
                        <Card.Title className="card-text">Check-Out</Card.Title>
                        <Card.Subtitle className="card-text">
                            {' '}
                            {state.listingResInfo.dateCheckOut} at 11am{' '}
                        </Card.Subtitle>
                        {/* <hr />
                        <Card.Title className="card-title">Address</Card.Title>
                        <Card.Subtitle className="card-text"> */}
                        {/* {state.locationData.lineOne} {state.payload.payload.locationData.cityName}, VA 90401{' '} */}
                        {/* </Card.Subtitle> */}
                        <hr />
                        <Card.Title className="card-title">Amount</Card.Title>
                        <Card.Subtitle className="card-text">
                            Total: ${state.totalDays < 0 ? 0 : state.payload.payload.costPerNight * state.totalDays} for{' '}
                            {state.totalDays} nights
                        </Card.Subtitle>
                        <hr />
                        <Card.Title className="card-text">Reservation Code</Card.Title>
                        <Card.Subtitle className="card-text">ASCENJ16</Card.Subtitle>
                        <hr />
                        <button className="btn btn-primary me-3">Change Your Reservation</button>
                        <button className="btn btn-success">Checkout</button>
                        <Card.Subtitle className="card-text d-none"></Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default ConfirmReservation;
