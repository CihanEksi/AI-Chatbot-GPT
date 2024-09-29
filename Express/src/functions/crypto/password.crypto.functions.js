const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

const comparePassword = async (password, hash) => {
    const result = await bcrypt.compare(password, hash);
    return result;
}


module.exports = {
    hashPassword,
    comparePassword,
};