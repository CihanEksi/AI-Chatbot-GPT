// auth router

const express = require('express')
const app = express()
const authController = require('../controllers/auth.controller');
const { validate } = require('../middlewares/validate.middleware');
const authValidation = require('../validations/auth.validation');

app.post(
    '/login',
    validate(authValidation.loginSchema),
    authController.login,
);

app.post(
    '/register',
    validate(authValidation.registerSchema),
    authController.register,
);

module.exports = app


