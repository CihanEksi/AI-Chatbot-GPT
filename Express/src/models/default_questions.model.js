const mongoose = require('mongoose');
const { Schema } = mongoose;
const toJsonPlugin = require('./plugins/toJson.plugin');


const defaultQuestionsSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
        collection: 'default_questions'
    }
);


defaultQuestionsSchema.plugin(toJsonPlugin);
module.exports = mongoose.model('default_questions', defaultQuestionsSchema);