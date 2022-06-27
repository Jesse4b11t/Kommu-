import axios from 'axios';
import * as helper from './serviceHelpers';

var emailService = {
    endpoint: `${helper.API_HOST_PREFIX}/api/emails`,
};

const createEmail = (payload) => {
    const config = {
        method: 'POST',
        url: `${emailService.endpoint}/contactus`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const contactUsService = {
    createEmail,
};

export default contactUsService;
