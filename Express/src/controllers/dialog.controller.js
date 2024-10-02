const {
    Questions,
    Answers,
    DefaultQuestions,
} = require('../models');
const { askToOpenAI } = require('../ai/openai.ai');
const catchError = require('../functions/catchError.function');
const dialogService = require('../services/dialog.services');



const getDialog = catchError(async (req, res, next) => {
    const user = req.user;
    const userId = user._id;
    const getDialog = await dialogService.getDialog(userId);

    res.status(200).json({
        success: true,
        message: 'Process Success',
        data: getDialog,
    });

});

const answer = catchError(async (req, res, next) => {
    const user = req.user;
    const userId = user._id;

    await dialogService.answerValidation(req.body, userId);
    
    await dialogService.answer(req.body, userId);
    
    await dialogService.getNextQuestionFromOpenAi(req.body, userId);
    
    getDialog(req, res, next);
});

module.exports = {
    getDialog,
    answer,
};