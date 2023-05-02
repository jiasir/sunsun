// Desc: API Gateway, which is the entry point of the backend
// It handles all the requests from the client, and sends them to the OpenAI API
// It also handles the responses from the OpenAI API, and sends them back to the client
// The Gateway not testing yet, only for development. TODO: add test


import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as openai from 'openai';

const app: Application = express();

// Setup OpenAI API key and module
const openaiConfig: openai.Configuration = {
    apiKey: 'YOUR_OPENAI_API_KEY',
};
const model = 'gpt-3.5-turbo';

// Setup request body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handle POST requests, which are sent from the client
app.post('/v1/chat/completions', async (req: Request, res: Response) => {
    // Get messages from the request body, which is sent from the client
    const messages: { content: string }[] = req.body.messages;

    // Define the result array, which will be sent back to the client
    const result: { role: string; content: string }[] = [];

    // Send multiple requests to generate longer text, because the maxTokens parameter is limited to 1024
    for (let i = 0; i < messages.length; i++) {
        const message = messages[i];
        const prompt = message.content;

        // Send OpenAI API request, and wait for the response
        const openaiResponse = await openai.createCompletion({
            engine: model,
            prompt: prompt,
            maxTokens: 1024,
            n: 1,
            stop: '\n',
        }, openaiConfig);

        // Get the text from the response, and add it to the result array
        const text = openaiResponse.data.choices[0].text;
        result.push({ role: 'AI', content: text });
    }

    // Send the result back to the client
    res.json(result);
});

// Listen on port 3000
app.listen(3000, () => console.log('API Gateway is running on port 3000'));
