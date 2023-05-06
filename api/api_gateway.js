// This file copy from production server

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const {createServer} = require("http");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

const httpServer = createServer(app);

// OPENAI_API_KEY from environment variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Route for /v1/engines
app.post('/v1/chat/completions', async (req, res) => {
    try {
        // Extract data from request body
        const { model, messages, temperature, top_p, n, stream, stop, max_tokens, presence_penalty, frequency_penalty, logit_bias, user } = req.body;
        // Send request to OpenAI API
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model,
            messages,
            temperature,
            top_p,
            n,
            stream,
            stop,
            max_tokens,
            presence_penalty,
            frequency_penalty,
            logit_bias,
            user
        }, {
            headers: { // Reset headers
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + OPENAI_API_KEY
            }
        });
        // Send response from OpenAI API to client
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

// Run server on port 3000 or environment variable PORT
httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// This is a demo for Caddy proxy port 3000 and 4000 with TLS
// https://sunsun.dev {
//     reverse_proxy localhost:3000
// }
// https://sunsun.dev/api {
//     reverse_proxy localhost:4000
// }
