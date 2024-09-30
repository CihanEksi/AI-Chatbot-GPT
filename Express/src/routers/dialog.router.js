const express = require('express')
const app = express()
const dialogController = require('../controllers/dialog.controller.js');
const dialogValidation = require('../validations/dialog.validation.js');
const authControl = require('../middlewares/authControl.middleware');
const { validate } = require("../middlewares/validate.middleware.js");

app.get(
    '/my-dialog',
    authControl,
    dialogController.getDialog
);

app.post(
    "/answer",
    authControl,
    validate(dialogValidation.answer),
    dialogController.answer
)



module.exports = app


