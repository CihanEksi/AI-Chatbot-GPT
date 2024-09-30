const joi = require('joi');
const { joiIsObjectId } = require('./common.validation');

const answer = joi.object({
    answer: joi.string().required(),
    questionId: joi.string().custom(joiIsObjectId).required(),
});


module.exports = {
    answer,
};