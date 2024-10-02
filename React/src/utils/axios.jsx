import axios from 'axios';
import config from '../constants/config.contstants';
import Cookies from 'js-cookie';
import { message } from 'antd';
import router from '../routes/router';

const instance = axios.create({
    baseURL: config.API_URL,
    timeout: 10000,
    withCredentials: true,
    validateStatus: function (status) {
        if (status === 401) {
            Cookies.remove('sessionID');
            message.error('Session expired. Please login again.');
            Object.keys(router)
        }
        return status >= 200
    },
});

export default instance;