const userCodes = require("./code/user.errors.json");
const systemCodes = require("./code/system.errors.json");
const dialogCodes = require("./code/dialog.errors.json");
const openAICodes = require("./code/openai.errors.json");

module.exports = {
    ...userCodes,
    ...systemCodes,
    ...dialogCodes,
    ...openAICodes,
}