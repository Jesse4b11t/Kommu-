import axios from 'axios';
import * as helper from "./serviceHelpers"

const faqUrl = `${helper.API_HOST_PREFIX}/api/faqs/`

const addFaq = (payload) => {
    const config = {
        method: 'POST',
        url: `${faqUrl}`,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getFaqById = (id) => {
    const config = {
        method: 'GET',
        url: `${faqUrl}${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getFaqs = () => {
    const config = {
        method: 'GET',
        url: `${faqUrl}paginate?pageIndex=0&pageSize=10`, 
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const getFaqByCreatedBy = (pageIndex, pageSize, queryString) => {
    const config = {
        method: 'GET',
        url: `${faqUrl}search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${queryString}`, 
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const updateFaq = (payload, id) => {
    const config = {
        method: 'PUT',
        url: `${faqUrl}${id}`,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const deleteFaq = (id) => {
    const config = {
        method: 'DELETE',
        url: `${faqUrl}${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const faqsServices = {
    addFaq,
    getFaqById,
    getFaqs,
    getFaqByCreatedBy,
    updateFaq,
    deleteFaq
};

export default faqsServices;