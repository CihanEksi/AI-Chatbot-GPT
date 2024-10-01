import axios from 'axios';
import config from '../constants/config.contstants';

const instance = axios.create({
    baseURL: config.API_URL,
    timeout: 10000,
    withCredentials: true,
});

export default instance;