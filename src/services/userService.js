import { API_HOST_PREFIX } from '../services/serviceHelpers';
import axios from 'axios';

const login = (payload) => {
    const config = {
        method: 'POST',
        url: `${API_HOST_PREFIX}/api/users/login`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const add = (payload) => {
    const config = {
        method: 'POST',
        url: `${API_HOST_PREFIX}/api/users`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const current = () => {
    const config = {
        method: 'GET',
        url: `${API_HOST_PREFIX}/api/users/current`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const update = (payload, id) => {
    const config = {
        method: 'GET',
        url: `${API_HOST_PREFIX}/api/users/${id}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const logout = () => {
    const config = {
        method: 'GET',
        url: `${API_HOST_PREFIX}/api/users/logout`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const functions = { login, add, current, update, logout };

export default functions;
