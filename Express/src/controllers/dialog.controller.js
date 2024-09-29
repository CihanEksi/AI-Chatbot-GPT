const {
    Questions,
    Answers,
    DefaultQuestions,
} = require('../models');
const { askToOpenAI } = require('../ai/openai.ai');



const getDialog = async (userId) => {
    await askToOpenAI();

};

module.exports = {
    getDialog,
};