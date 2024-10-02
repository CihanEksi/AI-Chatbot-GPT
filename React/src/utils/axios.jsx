import axios from 'axios';
import config from '../constants/config.contstants';
import Cookies from 'js-cookie';
import { message } from 'antd';
import router from '../routes/router';

const instance = axios.create({
    baseURL: config.API_URL,
    timeout: 10000,
    withCredentials: true,
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const errorResponse = error.response;
        const responseData = errorResponse.data;
        const responseStatus = errorResponse.status;
        const responseMessage = responseData.message;

        if (responseStatus === 401) {
            Cookies.remove('sessionID');
            message.error('Session expired. Please login again.');
            Object.keys(router).forEach((key) => {
                if (key !== 'login') {
                    delete router[key];
                }
            });
            router.navigate('/login');
        }

        if(responseStatus === 400) {
            message.error(responseMessage);
        }

        return Promise.reject(error);
    }
);

export default instance;