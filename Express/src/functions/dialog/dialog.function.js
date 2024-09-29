const {
    Questions,
    Answers,
    DefaultQuestions,
} = require('../models');


const getDialogLookups = () => {
    return [
        {
            $lookup: {
                from: 'answers',
                localField: 'answerId',
                foreignField: '_id',
                as: 'answers',
            },
        },
    ];
};

const getAllDialogs = async (filters = {}) => {

    const aggregate = [];

    if (filters.userId) {
        aggregate.push({
            $match: {
                userId: filters.userId,
            },
        });
    }

    const questions = await Questions.aggregate(aggregate).sort({ createdAt: -1 }).lean();

    return questions;
};

module.exports = {
    getAllDialogs,
};