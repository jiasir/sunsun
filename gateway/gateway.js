const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/v1/chat/completions', async (req, res) => {
    try {
        const {
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
        } = req.body;

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
            headers: {
                'Content-Type': 'application/json',
                'Transfer-Encoding': 'chunked',
                'Authorization': `Bearer ${OPENAI_API_KEY}` // your API key
            }
        });

        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
