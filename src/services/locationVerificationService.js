import axios from 'axios';
import * as helper from './serviceHelpers';

const get = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/verification/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getByCreatedBy = (pageIndex, pageSize) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/api/verification/filter/?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getById = (id)=> {
    const config = {
        method:'GET',
        url: `${helper.API_HOST_PREFIX}/api/verification/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

const update = (payload, id) => {
    const config = {
        method:'PUT',
        data: payload, 
        url: `${helper.API_HOST_PREFIX}/api/verification/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

const insert = (payload) => {
    const config = {
        method: 'POST',
        data: payload,
        url: `${helper.API_HOST_PREFIX}/api/verification/`,
        withCredentials: true, 
        crossdomain: true,
        headers: {'Content-Type': 'application/json'},
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError); 
}

export {get, getById, update, insert, getByCreatedBy};
