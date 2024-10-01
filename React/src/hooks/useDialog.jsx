import { useState } from 'react';
import { getDialog,answerQuestion } from '../requests/dialog/dialog.requests';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const useDialog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const getDialogList = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await getDialog();
            return response;
        } catch (error) {
            setError(error.message);
            message.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const answerLastQuestion = async (questionId,answer) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await answerQuestion(questionId, answer);
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
        getDialogList,
        answerLastQuestion,
    };
}

export default useDialog;