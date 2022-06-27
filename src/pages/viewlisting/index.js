import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import logger from 'sabio-debug';
import { getById } from '../../services/listingService';
import availableServiceService from '../../services/availableServiceService';
import locationService from '../../services/locationService';
import listingImagesService from '../../services/listingImagesService';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Amenities from './Amenities';
import Map from './Map';
import ListingCarousel from './ListingCarousel';

const Landing = () => {
    const { listingId } = useParams();
    const _logger = logger.extend('viewlisting');
    const [listingState, setListingState] = useState({
        listingId: 0,
        startDate: null,
        endDate: null,
        checkInTime: 0,
        checkOutTime: 0,
        daysAvailable: 0,
        locationData: null,
        title: '',
        description: '',
        bedRooms: 4,
        costPerNight: 0,
        ownerId: 0,
        services: [],
        images: [],
    });

    useEffect(() => {
        if (listingId) {
            getById(listingId).then(onGetListingSuccess).catch(onGetListingError);
            availableServiceService
                .getServiceByListingId(listingId)
                .then(onGetServicesSuccess)
                .catch(onGetServicesError);
            locationService.getByListingId(listingId).then(onGetLocationSuccess).catch(onGetLocationError);
            listingImagesService.getByListingId(listingId).then(onGetImagesSuccess).catch(onGetImagesError);
        }
    }, []);

    const onGetListingSuccess = (message) => {
        _logger('Success. Values recieved: ', message);
        setListingState((prevState) => {
            let newState = { ...prevState };
            let listingInfo = message.data.item;
            let rangeInMillis = listingInfo.daysAvailable * 86400000;
            newState.daysAvailable = listingInfo.daysAvailable;
            newState.listingId = listingInfo.id;
            newState.startDate = new Date(listingInfo.dateCreated);
            newState.endDate = new Date(newState.startDate.getTime() + rangeInMillis);
            newState.checkInTime = listingInfo.checkInTime;
            newState.checkOutTime = listingInfo.checkOutTime;
            newState.costPerNight = listingInfo.costPerNight;
            newState.title = listingInfo.title;
            newState.description = listingInfo.description;
            newState.bedRooms = listingInfo.bedRooms;
            newState.ownerId = listingInfo.createdBy;
            return newState;
        });
        _logger(listingState);
    };

    const onGetListingError = (message) => {
        _logger('Error: ', message);
    };

    const onGetServicesSuccess = (message) => {
        _logger('Got services: ', message);
        let servicesArray = message.data.items;
        let stringArray = [];
        for (let i = 0; i < servicesArray.length; i++) {
            stringArray[i] = { id: servicesArray[i].id, name: servicesArray[i].name };
        }
        setListingState((prevState) => {
            let newState = { ...prevState };
            newState.services = stringArray;
            return newState;
        });
    };

    const onGetServicesError = (message) => {
        _logger('Services error: ', message);
    };

    const onGetLocationSuccess = (message) => {
        _logger('Got location data: ', message);
        let location = message.data.item;
        setListingState((oldState) => {
            let newState = { ...oldState };
            newState.locationData = {
                cityName: location.city,
                latitude: location.latitude,
                longitude: location.longitude,
            };
            return newState;
        });
    };

    const onGetLocationError = (message) => {
        _logger('Location error: ', message);
    };

    const onGetImagesSuccess = (message) => {
        _logger('Got images: ', message);
        setListingState((oldState) => {
            let newState = { ...oldState };
            newState.images = message.item;
            return newState;
        });
    };

    const onGetImagesError = (message) => {
        _logger('Images error: ', message);
    };
    const navigate = useNavigate();

    const clickReserve = (e) => {
        _logger(e);

        const stateTransfer = { type: 'reservationType', payload: listingState };
        navigate(`/reservationform/${listingState.listingId}`, { state: stateTransfer });
    };

    return (
        <div className="container mb-4">
            <div className="row justify-content-center">
                <div className="col-12 col-md-10">
                    <ListingCarousel images={listingState.images} />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-4 mx-4">
                    <h1 className="text-decoration-underline">{listingState.title}</h1>
                    <h3>{listingState.description}</h3>
                    <h5>Bedrooms: {listingState.bedRooms}</h5>
                    <h5>Cost Per Night: {listingState.costPerNight}</h5>
                    <Amenities services={listingState.services} />
                    <button type="button" className="btn btn-dark" onClick={clickReserve}>
                        Reserve
                    </button>
                </div>
                <div className="col-auto mx-4">
                    <h3>Availability</h3>
                    <Calendar value={[listingState.startDate, listingState.endDate]}></Calendar>
                    <h5>
                        <span className="fw-normal">Check-in Time:</span> {listingState.checkInTime}
                        <span className="fw-normal"> / Check-out Time: </span>
                        {listingState.checkOutTime}
                    </h5>
                    <Map locationData={listingState.locationData} />
                </div>
            </div>
        </div>
    );
};

export default Landing;
