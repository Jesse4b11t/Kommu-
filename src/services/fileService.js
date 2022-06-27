import axios from "axios";
import * as helper from "./serviceHelpers"

const uploadFile = (payload) => {
    const config = {
        method: "POST",
        url: `${helper.API_HOST_PREFIX}/api/files`,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "multipart/form-data"},
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError)
}

const getFilesByCreatedBy = (pageIndex, pageSize, createdBy) => {
  
    const config = {
        method: "GET",
        url: `${helper.API_HOST_PREFIX}/api/files/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}&createdBy=${createdBy}`,
        crossdomain: true,
        headers: {"Content-Type": "application/json"},
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
};

const deleteFile =(id)=> {
    const config = {
        method: "DELETE",
        url: `${helper.API_HOST_PREFIX}/api/files/${id}`,
        data: id,
        crossdomain: true,
        headers: {"Content-Type": "application/json"},
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

const addFile =(payload)=> {
    const config={
        method:"POST",
        data: payload,
        url: `${helper.API_HOST_PREFIX}/api/files`, 
        crossdomain: true, 
        headers: {"Content-Type": "application/json"}
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

const updateFile =(payload) => {
    const config = {
        method: "PUT",
        url: `${helper.API_HOST_PREFIX}/api/files/${payload.id}`,
        data: payload,
        crossdomain: true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

const getFile = (id) => {
    const config = {
        method : "GET",
        url: `${helper.API_HOST_PREFIX}/api/files/${id}`,
        crossdomain:true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

const getAll = (pageIndex, pageSize) => {
    const config = {
        method : "GET",
        url: `${helper.API_HOST_PREFIX}/api/files/paginate?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain:true,
        headers: {"Content-Type": "application/json"}
    }

    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError);
}

export {addFile, getAll, updateFile, getFile, deleteFile, getFilesByCreatedBy, uploadFile}

