import axios from 'axios';
import * as helper from './serviceHelpers';

const getAll = () => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/listings/images/`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess);
};

const getByListingId = (id) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/listings/images/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess);
};

const functions = { getAll, getByListingId };

export default functions;
