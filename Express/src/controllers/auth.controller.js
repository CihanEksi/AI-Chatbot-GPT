const catchError = require('../functions/catchError.function');
const usersServices = require('../services/users.services');

const login = catchError(async (req, res) => {
    const { username, password } = req.body;

    const session = req.session;

    const user = await usersServices.login(username, password, session);

    res.cookie('sessionID', session.id);
    res.json(user);
})

const register = catchError(async (req, res) => {
    const { username, password } = req.body;
    const session = req.session;

    await usersServices.registerValidation(username, password);

    const user = await usersServices.register(username, password, session);
    
    res.cookie('sessionID', session.id);
    res.json(user);
})

module.exports = {
    login,
    register,
}


