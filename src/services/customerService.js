import axios from 'axios';
import * as helper from './serviceHelpers';

export const newCustomer = (payload) => {
    const config = {
        method: 'POST',
        data: payload,
        url: `${helper.API_HOST_PREFIX}/api/stripe/create`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const exports = { newCustomer };

export default exports;
