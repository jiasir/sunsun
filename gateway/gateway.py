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

Caddy Usage:
This is a demo for Caddy proxy port 3000 and 4000 with TLS. See: https://caddyserver.com/docs/quick-starts/reverse-proxy
https://sunsun.dev {
   reverse_proxy localhost:3000
}
https://sunsun.dev/api {
    reverse_proxy localhost:4000
}
"""

from quart import Quart, jsonify, request
from quart_cors import cors
import openai
import os
import logging
from quart.logging import default_handler

app = Quart(__name__)
app = cors(app, allow_origin="*")  # Enable CORS for all origins

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
@app.route('/v1/chat/completions', methods=['POST', 'OPTIONS'])
async def get_chat_completions():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
        return '', 204, headers
    try:
        # Get the request data from the client
        data = await request.get_json()

        # Make a request to OpenAI's chat API
        response = openai.ChatCompletion.create(**data)

        # Return the response from OpenAI to the client
        return jsonify(response)

    except Exception as e:
        # Log the exception message and return an error response
        app.logger.exception('An error occurred while processing the request:')
        return jsonify({'error': str(e)}), 500


# Start the Quart server
if __name__ == '__main__':
    app.run(debug=True, port=4000)
