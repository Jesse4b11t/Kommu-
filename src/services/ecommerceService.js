import axios from 'axios';
import * as helper from './serviceHelpers';
import debug from 'sabio-debug';
const _logger = debug.extend('nav');

export const getCurrentUser = () => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/users/current`,
        crossdomain: true,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

export const getPaymentAccount = (id) => {
    _logger({ ID: id });
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/payments/${id}`,
        crossdomain: true,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

export const getCountries = () => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/payments`,
        crossdomain: true,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

export const addPaymentAccount = (payload) => {
    const config = {
        method: 'POST',
        data: payload,
        url: `${helper.API_HOST_PREFIX}/api/payments`,
        crossdomain: true,
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};
const exports = { getPaymentAccount, getCurrentUser, addPaymentAccount, getCountries };

export default exports;
