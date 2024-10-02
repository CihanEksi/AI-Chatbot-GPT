const {
    Questions,
    Answers,
    DefaultQuestions,
} = require('../../models');
const { decryptDialog } = require('../../services/mappers/dialog.mappers');



const getDialogLookups = () => {
    return [
        {
            $lookup: {
                from: 'answers',
                localField: '_id',
                foreignField: 'questionId',
                as: 'answers',
            },
        }
    ];
};

const getRandomDefaultQuestion = async () => {
    const defaultLength = await DefaultQuestions.countDocuments();

    const randomIndex = Math.floor(Math.random() * defaultLength);

    const defaultQuestions = await DefaultQuestions.find({}).limit(1).skip(randomIndex).lean();

    return defaultQuestions;
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

    const lookups = getDialogLookups();

    aggregate.push(...lookups);

    const questions = await Questions.aggregate(aggregate).sort({ createdAt: 1 });

    const readableQuestions = decryptDialog(questions);

    return readableQuestions;
};


const createQuestion = async (userId, question) => {
    const createQuestion = await Questions.create({
        userId: userId,
        question: question,
        answerId: null,
    });

    return createQuestion;
}


const createNewDialog = async (userId) => {
    const defaultQuestions = await getRandomDefaultQuestion();

    await createQuestion(userId, defaultQuestions[0].question);

    const dialog = await getAllDialogs({ userId: userId });

    return dialog;
};



module.exports = {
    getAllDialogs,
    createNewDialog,
    createQuestion,
};