import axios from 'axios';
import * as helper from './serviceHelpers';

var serviceServices = {
    endpoint: `${helper.API_HOST_PREFIX}/api/availableservices`,
};

const getAvailableServices = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${serviceServices.endpoint}/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const GetByCreatedBy = (pageIndex, pageSize, createdBy) => {
    const config = {
        method: 'GET',
        url: `${serviceServices.endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&CreatedBy=${createdBy}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getServiceById = (id) => {
    const config = {
        method: 'GET',
        url: `${serviceServices.endpoint}/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getServiceByListingId = (id) => {
    const config = {
        method: 'GET',
        url: `${serviceServices.endpoint}/details/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const addService = (payload) => {
    const config = {
        method: 'POST',
        url: serviceServices.endpoint,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    // return axios(config);
    return axios(config).then((response) => {
        return {
            id: response.data.item,
            ...payload,
        };
    });
};

const availableServiceServices = {
    getAvailableServices,
    GetByCreatedBy,
    getServiceById,
    getServiceByListingId,
    addService,
};

export default availableServiceServices;
