const express = require('express')
const app = express()
const authRouter = require('./auth.router.js');
const dialogRouter = require('./dialog.router.js');


app.use('/auth', authRouter);

// app.use('/auth', (req, res, next) => {
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     next();
// });

app.use('/dialog', dialogRouter);


module.exports = app