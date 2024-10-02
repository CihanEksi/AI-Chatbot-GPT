const OpenAI = require("openai");
const { OPEN_AI_KEY, OPEN_AI_SYSTEM_CONTENT, OPEN_AI_MODEL } = require('../constants/config.constants');

const openai = new OpenAI({
    apiKey: OPEN_AI_KEY,
});

// Example messages:
// [
// { role: "user", content: "I like cats." },
// { role: "assistant", content: "That's great to hear! Do you own any cats yourself?" },
// { role: "user", content: "Yes I have one. It name is Ananas." },
// ]

async function askToOpenAI(messages, model = OPEN_AI_MODEL) {
    
    const systemMessage = {
            role: "system",
            content: OPEN_AI_SYSTEM_CONTENT
    };

    const response = await openai.chat.completions.create({
        messages: [
            systemMessage,
            ...messages,
        ],
        model: model
    });

    console.log([
        systemMessage,
        ...messages,
    ],"messages");
    const nextQuestion = response.choices?.[0].message.content;
    
    if(!nextQuestion) {
        throw new Error('OPENAI_RESPONSE_ERROR');
    }

    return nextQuestion;
}



module.exports = {
    askToOpenAI,
}