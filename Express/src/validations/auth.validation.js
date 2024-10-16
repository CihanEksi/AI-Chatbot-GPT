const joi = require('joi');

const loginSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});

const registerSchema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
});

module.exports = {
    loginSchema,
    registerSchema,
};