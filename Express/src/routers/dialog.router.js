const express = require('express')
const app = express()
const dialogController = require('../controllers/dialog.controller.js');
const dialogValidation = require('../validations/dialog.validation.js');
const authControl = require('../middlewares/authControl.middleware');
const { validate } = require('../models/answers.model.js');

app.get(
    '/list',
    authControl,
    dialogController.getDialog
);




module.exports = app


