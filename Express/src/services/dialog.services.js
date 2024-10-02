const { getAllDialogs, createNewDialog, createQuestion } = require('../functions/dialog/dialog.function');
const { Questions, Answers } = require('../models');
const { prepareDialogToOpenAi } = require('../services/mappers/dialog.mappers');
const { askToOpenAI } = require('../ai/openai.ai');


const getDialog = async (userId) => {
    const dialogFilters = {
        userId: userId,
    };

    let dialogs = await getAllDialogs(dialogFilters)

    if (dialogs.length === 0) {
        dialogs = await createNewDialog(userId);
    }

    return dialogs;
}

const answerValidation = async (body, userId) => {
    const { questionId, answer } = body;

    const question = await Questions.findOne({ _id: questionId }).lean();

    if (!question) {
        throw new Error('QUESTION_NOT_FOUND');
    }

    const questionUserId = question.userId;

    if (!questionUserId.equals(userId)) {
        throw new Error('QUESTION_IS_NOT_YOURS');
    }

    const checkAnswer = await Answers.findOne({ questionId: questionId }).select('_id').lean();

    if (checkAnswer) {
        throw new Error('ANSWER_ALREADY_EXISTS');
    }

}

const answer = async (body, userId) => {
    const { questionId, answer } = body;

    const createAnswer = await Answers.create({
        answer: answer,
        questionId: questionId,
        userId: userId,
    });

    return createAnswer;
}

const getNextQuestionFromOpenAi = async (body, userId) => {
    const getLastDialog = await getDialog(userId);
    const formatToOpenAiAsk = prepareDialogToOpenAi(getLastDialog);
    const openAiResponse = await askToOpenAI(formatToOpenAiAsk);
    await createQuestion(userId, openAiResponse);
}

module.exports = {
    getDialog,
    answerValidation,
    answer,
    getNextQuestionFromOpenAi,
};