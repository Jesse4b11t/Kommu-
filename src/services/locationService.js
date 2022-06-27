import axios from 'axios';
import * as helper from './serviceHelpers';

const locations = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/locations/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config);
};

const getByListingId = (id) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/locations/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config);
};

export const addLocations = (payload) => {
    const config = {
        method: 'POST',
        url: `${helper.API_HOST_PREFIX}/api/locations/`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config);
};

const exports = { locations, addLocations, getByListingId };

export default exports;
