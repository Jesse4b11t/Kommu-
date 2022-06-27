import axios from 'axios';
import debug from 'sabio-debug';
import * as helper from './serviceHelpers';

const _logger = debug.extend('ListingService');

const add = (payload) => {
    const config = {
        method: 'POST',
        url: `${helper.API_HOST_PREFIX}/api/listings`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then((response) => {
        _logger(response, 'AddListing Service');
        return {
            id: response.data.item,
            ...payload,
        };
    });
};

const post = (payload) => {
    const config = {
        method: 'POST',
        url: `${helper.API_HOST_PREFIX}/api/lookups`,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then((response) => {
        return {
            id: response.data.item,
            ...payload,
        };
    });
};

const getById = (id) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/listings/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getPaginated = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/listings/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getCreateby = (pageIndex, pageSize, createdBy) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/listings/search?pageIndex=${pageIndex}&pageSize=${pageSize}?createdBy=${createdBy}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

export { post, add, getById, getPaginated, getCreateby };
