const { OPEN_AI_ROLES } = require('../../enums/openai.enums');
const { stringDecrypt } = require('../../functions/crypto/data.crypto.functions');

const prepareDialogToOpenAi = (dialog = []) => {
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

const decryptDialog = (dialog = []) => {
    return dialog.map(dialogElement => {
        const answers = dialogElement.answers.map(item => {
            return {
                ...item,
                answer: stringDecrypt(item.answer),
            }
        });
        return {
            ...dialogElement,
            answers
        }
    });
}

module.exports = {
    prepareDialogToOpenAi,
    decryptDialog,
}