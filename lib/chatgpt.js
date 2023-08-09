// lib/summary.js
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getSummary(text, wordcount) {
    // Use the summarization engine to generate a summary of the text
    const response = await openai.createCompletion({
        engine: 'gpt-3.5-turbo',
        prompt: `Summarize the following text in around ${wordcount} words : 
${text}`,
        maxTokens: 100,
        temperature: 0,
        frequencyPenalty: 0,
        presencePenalty: 0,
        stop: '\n'
    });
    return response.data.choices[0].text;
}

module.exports = getSummary;
