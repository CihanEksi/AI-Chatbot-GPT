const { Users } = require('../models');
const catchError = require('../functions/catchError.function');

const authControl = catchError(async (req, res, next) => {
    const { sessionID } = req.cookies;
    console.log(sessionID, 'sessionID');

    if (!sessionID) {
        throw new Error('SESSION_EXPIRED');
    }

    const userData = await Users.findOne({ "session.sessionID": sessionID }).lean();
    
    if (!userData) {
        throw new Error('SESSION_EXPIRED');
    }

    req.user = userData;

    next();

});

module.exports = authControl;