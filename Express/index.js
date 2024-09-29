const express = require('express');
const session = require('express-session');
const { PORT, SESSION_SECRET, SESSION_EXPIRATION } = require('./src/constants/config.constants');
const methodOverride = require('method-override')
const mainRouter = require('./src/routers/main.router');
const errorHandler = require('./src/errors/errorHandler.errors');
const cookieParser = require('cookie-parser');

require('./src/database/mongodb.database');

const app = express();
app.use(cookieParser());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true,
        maxAge: SESSION_EXPIRATION,
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride())
app.use(mainRouter);


app.use(methodOverride())

// throw error catch
app.use(errorHandler);




app.listen(PORT, () => {
    console.log(`Server started on ${PORT} Port!`);
});