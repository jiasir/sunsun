// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
//
// const app = express();
// const port = process.env.PORT || 3000;
//
// app.use(cors());
// app.use(express.json());
//
// app.post('/chat', async (req, res) => {
//     try {
//         const { model, messages, temperature, top_p, n, stream, stop, max_tokens, presence_penalty, frequency_penalty, logit_bias, user } = req.body;
//
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model,
//             messages,
//             temperature,
//             top_p,
//             n,
//             stream,
//             stop,
//             max_tokens,
//             presence_penalty,
//             frequency_penalty,
//             logit_bias,
//             user
//         }, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer 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` // replace with your API key
//             }
//         });
//
//         res.send(response.data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Something went wrong');
//     }
// });
//
// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });


const https = require('https');
const fs = require('fs');
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const privateKey = fs.readFileSync('/root/cert/sunsun.dev.key', 'utf8');
const certificate = fs.readFileSync('/root/cert/sunsun.dev.cer', 'utf8');
const ca = fs.readFileSync('/root/cert/sunsun.dev.fullchain.cer', 'utf8');

const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
};

const httpsServer = https.createServer(credentials, app);

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
                'Authorization': `Bearer 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` // your API key
            }
        });

        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Something went wrong');
    }
});

httpsServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

