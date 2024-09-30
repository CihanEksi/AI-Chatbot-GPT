const mongoose = require('mongoose');
const { Schema } = mongoose;
const toJsonPlugin = require('./plugins/toJson.plugin');

const answersSchema = new Schema({
    answer: {
        type: String,
        required: true,
        trim: true,
    },
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'questions',
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
}, {
    timestamps: true,
    collection: 'answers'
}
);

answersSchema.plugin(toJsonPlugin);

module.exports = mongoose.model('answers', answersSchema);