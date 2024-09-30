const mongoose = require('mongoose');
const { Schema } = mongoose;
const toJsonPlugin = require('./plugins/toJson.plugin');

const questionsSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    }
},
    {
        timestamps: true,
        collection: 'questions'
    }
);

questionsSchema.plugin(toJsonPlugin);

module.exports = mongoose.model('questions', questionsSchema);