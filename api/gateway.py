"""
This code defines a Quart server that acts as a gateway to OpenAI's chat API.
It receives requests from the client, makes a request to OpenAI's chat API,
and returns the response from OpenAI to the client.

Example request body:
{
  "model": "gpt-3.5-turbo",
  "messages": [{"role": "user", "content": "Hello!"}]
}


Example response body:
{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\n\nHello there, how may I assist you today?",
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}
"""

from quart import Quart, jsonify, request
import openai
import os
import logging
from quart.logging import default_handler

app = Quart(__name__)

# Setup logging
app.logger.removeHandler(default_handler)  # Remove default logging handler
app.logger.setLevel(logging.DEBUG)

# Add logging handler for writing logs to a file
file_handler = logging.FileHandler('gateway.log')
file_handler.setLevel(logging.DEBUG)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
app.logger.addHandler(file_handler)

# Set your OpenAI API key
openai.api_key = os.environ["OPENAI_API_KEY"]


# Define a route to handle client requests
@app.route('/v1/chat/completions', methods=['POST'])
async def get_chat_completions():
    try:
        # Get the request data from the client
        data = await request.get_json()

        # Make a request to OpenAI's chat API
        response = openai.ChatCompletion.create(
            model=data['model'],
            messages=data['messages'],
            temperature=data.get('temperature', 0.8),
            top_p=data.get('top_p', 1),
            n=data.get('n', 1),
            stream=data.get('stream', False),
            stop=data.get('stop', 'null'),
            max_tokens=data.get('max_tokens', None),
            presence_penalty=data.get('presence_penalty', 0),
            frequency_penalty=data.get('frequency_penalty', 0),
            logit_bias=data.get('logit_bias', {}),
            user=data.get('user', ''),
        )

        # Return the response from OpenAI to the client
        return jsonify(response)

    except Exception as e:
        # Log the exception message and return an error response
        app.logger.exception('An error occurred while processing the request:')
        return jsonify({'error': str(e)}), 500


# Start the Quart server
if __name__ == '__main__':
    app.run(debug=True, port=4000)

# This is a demo for Caddy proxy port 3000 and 4000 with TLS
# https://sunsun.dev {
#    reverse_proxy localhost:3000
# }
# https://sunsun.dev/api {
#     reverse_proxy localhost:4000
# }
