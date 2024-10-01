const { OPEN_AI_ROLES } = require('../../enums/openai.enums');

const prepareDialogToOpenAi = (dialog=[]) => {
    const dialogToOpenAi = [];

    for (const dialogElement of dialog) {
        const question = dialogElement.question;

        dialogToOpenAi.push({
            role: OPEN_AI_ROLES.assistant,
            content: question,
        });

        const answers = dialogElement.answers;
        for (const answer of answers) {
            dialogToOpenAi.push({
                role: OPEN_AI_ROLES.user,
                content: answer.answer,
            });
        }
    }

    return dialogToOpenAi;
}

module.exports = {
    prepareDialogToOpenAi,
}