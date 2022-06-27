import axios from 'axios';
import logger from 'sabio-debug';
const _xhrLogger = logger.extend('xhr');
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    config.withCredentials = true;
    _xhrLogger(config);
    return config;
});

const onGlobalSuccess = (response) => {
    return response.data;
};

const onGlobalError = (err) => {
    return Promise.reject(err);
};

const API_HOST_PREFIX = process.env.REACT_APP_API_HOST_PREFIX;
const API_NODE_HOST_PREFIX = process.env.REACT_APP_API_NODE_HOST_PREFIX;

logger({ API_HOST_PREFIX, API_NODE_HOST_PREFIX });

export { onGlobalError, onGlobalSuccess, API_HOST_PREFIX, API_NODE_HOST_PREFIX };
