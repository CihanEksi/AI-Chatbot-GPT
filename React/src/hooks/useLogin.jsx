import { useState } from 'react';
import { loginRequest, registerRequest } from '../requests/auth/auth.requests';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (username, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await loginRequest(username, password);
            navigate('/chat');
            return response;
        } catch (error) {
            setError(error.message);
            message.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async (username, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await registerRequest(username, password);

            return response;
        } catch (error) {
            setError(error.message);
            message.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        handleLogin,
        handleRegister,
    };
}

export default useLogin;