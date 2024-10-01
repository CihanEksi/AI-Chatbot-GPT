import axios from '../../utils/axios';

const getDialog = async () => {
    const response = await axios.get('/dialog/my-dialog');
    return response.data
};

const answerQuestion = async (questionId, answer) => {
    const payload = {
        "answer": answer,
        "questionId": questionId
    }

    const response = await axios.post('/dialog/answer', payload);
    
    return response.data
};



export {
    getDialog,
    answerQuestion,
};
