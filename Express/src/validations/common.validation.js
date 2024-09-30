const isValidObjectId = require('mongoose').Types.ObjectId.isValid;

const joiIsObjectId = (value, helpers) => {
    if (!isValidObjectId(value)) {
        return helpers.error('any.invalid');
    }
    return value;
}

module.exports = {
    joiIsObjectId,
}