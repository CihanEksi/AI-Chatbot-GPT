const moment = require('moment');
const { Users } = require('../models');

const checkSessionExpired = (session) => {
    const now = moment().toDate();
    const sessionEnd = session.sessionEnd
    if (now > sessionEnd) {
        return true;
    }
    return false;
}

const renewSession = async (session, userId) => {
    const sessionStart = moment().toDate();
    const sessionEnd = moment().add(1, 'day').toDate();
    session.sessionStart = sessionStart;
    session.sessionEnd = sessionEnd;
    await Users.updateOne({ _id: userId }, {
        "session.sessionStart": sessionStart,
        "session.sessionEnd": sessionEnd,
        "session.sessionID": session.id,
    });
}

module.exports = {
    checkSessionExpired,
    renewSession,
};