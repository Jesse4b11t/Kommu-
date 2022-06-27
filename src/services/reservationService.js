import axios from 'axios';

import * as helper from './serviceHelpers';

const reservationService = {
    endpoint: 'https://localhost:50001/api/reservations',
};

const createReservationForm = (payload) => {
    const config = {
        method: 'POST',
        url: `${reservationService.endpoint}`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getListingResById = (id) => {
    const config = {
        method: 'GET',
        url: `${reservationService.endpoint}/${id}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const updateReservation = (payload) => {
    const config = {
        method: 'PUT',
        url: `${reservationService.endpoint}/${payload.id}`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getAll = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${reservationService.endpoint}/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getListingReservationByCreatedBy = (pageIndex, pageSize, createdBy) => {
    const config = {
        method: 'GET',
        url: `${reservationService.endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&createdBy=${createdBy}`,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const deleteReservation = (id) => {
    const config = {
        method: 'PUT',
        url: `${reservationService.endpoint}/${id}`,
        data: id,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

export {
    createReservationForm,
    getListingResById,
    updateReservation,
    getAll,
    getListingReservationByCreatedBy,
    deleteReservation,
};
