const { Users } = require('../models');
const { comparePassword, hashPassword } = require('../functions/crypto/password.crypto.functions');
const {
    renewSession,
} = require('../functions/session.functions');
const moment = require('moment');


const login = async (username, password, session) => {
    const user = await Users.findOne({ username: username });

    if (!user) {
        throw new Error('USER_NOT_FOUND');
    }
    const passwordMatch = await comparePassword(password, user.__password);
    if (!passwordMatch) {
        throw new Error('PASSWORD_INCORRECT');
    }

    await renewSession(session, user._id);

    return user.toJSON();
}

const registerValidation = async (username, password) => {
    const user = await Users.findOne({ username: username }).lean();
    if (user) {
        throw new Error('USER_ALREADY_EXISTS');
    }
}

const register = async (username, password, session) => {
    const sessionStart = moment().toDate();
    const sessionEnd = session.cookie.expires;

    const user = await Users.create({
        username: username,
        __password: await hashPassword(password),
        session: {
            sessionID: session.id,
            sessionStart: sessionStart,
            sessionEnd: sessionEnd,
        },
    });

    return user.toJSON();
}



module.exports = {
    login,
    register,
    registerValidation,
};