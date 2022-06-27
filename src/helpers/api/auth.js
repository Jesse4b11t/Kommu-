import { APICore } from './apiCore';

const api = new APICore();

const login = (params) => {
    const baseUrl = '/login/';
    return api.create(`${baseUrl}`, params);
};

const logout = () => {
    const baseUrl = '/logout/';
    return api.create(`${baseUrl}`, {});
};

const signup = (params) => {
    const baseUrl = '/register/';
    return api.create(`${baseUrl}`, params);
};

const forgotPassword = (params) => {
    const baseUrl = '/forget-password/';
    return api.create(`${baseUrl}`, params);
};

const forgotPasswordConfirm = (params) => {
    const baseUrl = '/password/reset/confirm/';
    return api.create(`${baseUrl}`, params);
};

export { login, logout, signup, forgotPassword, forgotPasswordConfirm };
