const mongoose = require('mongoose');
const { MONGODB_URI, DB_NAME } = require('../constants/config.constants');
const { DefaultQuestions } = require('../models');
const { defaultQuestions } = require('../constants/defaultQuestions.constants');

mongoose.connect(MONGODB_URI, {
    dbName: DB_NAME,
    useNewUrlParser: true,
});

mongoose.set("debug", true);

const checkDefaultQuestionsIfDoesnotExistInsertThem = async () => {
    const systemDefaultQuestions = await DefaultQuestions.find({}).lean();

    for (const question of defaultQuestions) {
        const questionExists = systemDefaultQuestions.some((q) => q.question === question.question);
        if (!questionExists) {
            await DefaultQuestions.create({
                question: question,
            })
        }
    }

}

mongoose.connection.on('open', () => {
    console.log('MongoDB: Connected!');
    checkDefaultQuestionsIfDoesnotExistInsertThem();
});


mongoose.connection.on('error', (err) => {
    console.error('MongoDB: Connection Error', err);
});

module.exports = mongoose;