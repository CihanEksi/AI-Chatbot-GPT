require('dotenv').config()
const joi = require('joi');

const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    PORT: Number(process.env.PORT),
    SESSION_SECRET: process.env.SESSION_SECRET,
    SESSION_EXPIRATION: Number(process.env.SESSION_EXPIRATION),
    DATA_SECRET: process.env.DATA_SECRET,
    OPEN_AI_KEY: process.env.OPEN_AI_KEY,
    OPEN_AI_SYSTEM_CONTENT: process.env.OPEN_AI_SYSTEM_CONTENT,
    OPEN_AI_MODEL: process.env.OPEN_AI_MODEL,
}

const schema = joi.object({
    MONGODB_URI: joi.string().required(),
    DB_NAME: joi.string().required(),
    PORT: joi.number().required(),
    SESSION_SECRET: joi.string().required(),
    SESSION_EXPIRATION: joi.number().required(),
    DATA_SECRET: joi.string().required(),
    OPEN_AI_KEY: joi.string().required(),
    OPEN_AI_SYSTEM_CONTENT: joi.string().required(),
    OPEN_AI_MODEL: joi.string().required(),
});

const { error } = schema.validate(config);

if (error) {
    throw new Error(`.env file validation error: ${error.message}`);
}

module.exports = config;