const { SESSION_SECRET,SESSION_EXPIRATION } = require('./config.constants');

module.exports = {
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: true, // HTTPS için gerekli
        maxAge: Number(SESSION_EXPIRATION)// 1 saat sonra expire olsun
    }
}