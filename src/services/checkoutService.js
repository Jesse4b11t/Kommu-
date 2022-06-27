import axios from 'axios';
import * as helper from './serviceHelpers';

export const navigateToCheckout = (payload) => {
    const config = {
        method: 'POST',
        data: payload,
        url: `${helper.API_HOST_PREFIX}/api/stripe/checkout`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

export const GetProducts = (payload) => {
    const config = {
        method: 'GET',
        data: payload,
        url: `${helper.API_HOST_PREFIX}/api/stripe`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const exports = { navigateToCheckout, GetProducts };

export default exports;
