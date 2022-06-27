import axios from "axios";
import * as helper from './serviceHelpers';

const swapperUrl = `${helper.API_HOST_PREFIX}/api/swapper/`

const GetSwapperStory = () => {
    const config = {
        method: 'GET',
        url: swapperUrl,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' },
    };
    return axios(config).then(helper.onGlobalSuccess).catch(helper.onGlobalError)
    ;
};

const swapperService = {GetSwapperStory};
export default swapperService