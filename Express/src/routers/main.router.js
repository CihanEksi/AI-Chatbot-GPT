const express = require('express')
const app = express()
const authRouter = require('./auth.router.js');
const dialogRouter = require('./dialog.router.js');


app.use('/auth', authRouter);
app.use('/dialog', dialogRouter);


module.exports = app