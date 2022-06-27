import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import * as reservationService from '../services/reservationService';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import './Reservations.css';
import debug from 'sabio-debug';
//import * as listingService from '../services/listingService';
//import locationService from '../services/locationService';

const _logger = debug.extend('Reservations');

function ReservationForm() {
    const { state } = useLocation();
    _logger(state, 'payload');

    const navigate = useNavigate();

    const { listingIdParams } = useParams();
    _logger(listingIdParams);

    const [listingResInfo, setListingResInfo] = useState({
        listingId: state.payload.listingId,
        dateCheckIn: new Date(),
        dateCheckOut: new Date(),
        statusId: 3,
    });
    const [totalDays, setTotalDays] = useState(1);

    _logger(listingResInfo.listingId);
    const [perWeek, setPerWeek] = useState({ cost: 0 });

    const [listingData, setListingData] = useState({
        bedrooms: 0,
        bathroom: 0,
        guest: 0,
    });

    const [locationData, updateLocationData] = useState({});

    useEffect(() => {
        setTotalDays(() => {
            let total =
                new Date(listingResInfo.dateCheckOut).getTime() - new Date(listingResInfo.dateCheckIn).getTime();
            total = total / 86400000;
            return Math.floor(total);
        });
        _logger(totalDays);
    }, [listingResInfo.dateCheckIn, listingResInfo.dateCheckOut]);

    useEffect(() => {
        if (state?.type === 'reservationType' && state?.payload) {
            const updatelistingInfo = state.payload;
            _logger(updatelistingInfo);
            setListingResInfo((prevState) => {
                const pd = { ...prevState };
                return pd;
            });
            setPerWeek((prevState) => {
                const weeklycost = { ...prevState };
                weeklycost.cost = state.payload.costPerNight * 7;
                return weeklycost;
            });
        } else {
            reservationService.getListingResById(listingIdParams).then(getByIdSuccess).catch(getByIdError);
        }
        // listingService.getById(listingResInfo.listingId).then(onGetListingSuccess);
    }, []);

    // const onGetListingSuccess = (data) => {
    //     locationService.getByListingId(data.data.item.locationId).then(onGetLocationSuccess);
    //     return data;
    // };

    // const onGetLocationSuccess = (data) => {
    //     updateLocationData(() => {
    //         const result = data.data.item;
    //         return result;
    //     });
    // };

    false && _logger(updateLocationData);

    const dateUpdater = (e) => {
        _logger(e);
        const name = e.target.name;
        const value = e.target.value;
        setListingResInfo((prevState) => {
            const newState = { ...prevState };
            newState[name] = value;
            return newState;
        });
    };

    const getByIdSuccess = (response) => {
        _logger(response.item);
        let listingObj = response.item.listing;
        setListingData((prevState) => {
            const pd = { ...prevState };
            pd.bathroom = listingObj.baths;
            pd.bedrooms = listingObj.bedRooms;
            pd.guest = listingObj.guestCapacity;
            return pd;
        });
    };

    false && _logger(listingData);

    const getByIdError = (err) => {
        _logger(err);
    };

    const onClickReserve = (e) => {
        e.preventDefault();

        reservationService.createReservationForm(listingResInfo).then(onAddSuccess).catch(onAddError);
    };

    const onAddSuccess = (response) => {
        const info = response.item;
        _logger({ infos: info });

        const stateTransfer = { type: 'confirmType', payload: state, listingResInfo, locationData, totalDays };
        navigate(`/reserved/${state.payload.listingId}`, { state: stateTransfer });
    };
    const onAddError = (err) => {
        _logger(err);
    };

    return (
        <React.Fragment>
            <div className="full-container">
                <img className="img-res" src={state.payload.images[0]} alt="housing" />

                <div className="res-container container">
                    <h1 className="res-title">Make A Reservation</h1>
                    <h5 className="title">{state.payload.title}</h5>
                    <hr />
                    <h4>Services</h4>

                    <p className="mb-1">{state.payload.services[0].name}</p>
                    <p className="mb-1">{state.payload.services[1].name}</p>
                    <p className="mb-1">{state.payload.services[2].name}</p>

                    <hr />
                    <h4>Prices</h4>
                    <p className="mb-1">$ {state.payload.costPerNight}/Night</p>
                    <p className="mb-3">$ {perWeek.cost}/Week</p>

                    <hr />
                    <div className=" checkIn">
                        <label>Check-In Date</label> <br />
                        <input name="dateCheckIn" type="date" onChange={dateUpdater}></input>
                    </div>
                    <div className=" checkOut">
                        <label>Check-Out Date</label> <br />
                        <input name="dateCheckOut" type="date" onChange={dateUpdater}></input>
                    </div>
                    <div className="btn mb-3 reserve-btn" onClick={onClickReserve}>
                        Reserve this home
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ReservationForm;
