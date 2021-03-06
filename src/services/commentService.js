import axios from 'axios';
import * as helper from './serviceHelpers';

const endpoint = "api/comments";

const addComment = (payload) => {
    const config = {
        method: 'POST',
        url: `${helper.API_HOST_PREFIX}/${endpoint}`,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const updateComment = (id, payload) => {
    const config = {
        method: 'PUT',
        url: `${helper.API_HOST_PREFIX}/${endpoint}/${id}`,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const deleteComment = (id, payload) => {
    const config = {
        method: 'PUT',
        url: `${helper.API_HOST_PREFIX}/${endpoint}/statuses/${id}`,
        withCredentials: true,
        data: payload,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getCommentByCreatedBy = (id) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/${endpoint}/users/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const getCommentByEntityId = (entityTypeId, entityId) => {
    const config = {
        method: 'GET',
        url: `${helper.API_HOST_PREFIX}/${endpoint}/entities/${entityTypeId}/${entityId}`,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config);
};

const commentServices = {
    addComment, updateComment, deleteComment, getCommentByCreatedBy, getCommentByEntityId
};

export default commentServices;