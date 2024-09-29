const errorCodes = require('./errorCodes.errors');

const errorHandler = (err, req, res, next) => {
    console.log(err, "errMsg");

    const errorCode = err.message;
    const error = errorCodes?.[errorCode];
    const errorMessage = error?.message || "Internal Server Error";
    const status = error?.status || 500;

    return res.status(status).json({
        success: false,
        message: errorMessage
    });
}

module.exports = errorHandler;