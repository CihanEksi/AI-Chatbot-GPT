import axios from '../../utils/axios';

const loginRequest = async (username, password) => {
    const payload = {
        username,
        password,
    };

    const response = await axios.post('/auth/login', payload);
    
    return response.data
};

const registerRequest = async (username, password) => {
    const payload = {
        username,
        password,
    };

    const response = await axios.post('/auth/register', payload);
    
    return response.data
};



export {
    loginRequest,
    registerRequest,
};
