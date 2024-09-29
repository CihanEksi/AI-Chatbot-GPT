const userCodes = require("./code/user.errors.json");
const systemCodes = require("./code/system.errors.json");

module.exports = {
    ...userCodes,
    ...systemCodes
}