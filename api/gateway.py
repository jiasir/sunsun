from flask import Flask, request, jsonify
import openai
import os

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = os.environ["OPENAI_API_KEY"]


# Define a route to handle client requests
@app.route('/v1/chat/completions', methods=['POST'])
def get_chat_completions():
    try:
        # Get the request data from the client
        data = request.get_json()

        # Make a request to OpenAI's chat API
        response = openai.Completion.create(
            model=data['model'],
            messages=data['messages'],
            pemperature=data.get('temperature', 0.8),
            top_p=data.get('top_p', 1),  # number Optional Defaults to 1
            n=data.get('n', 1),  # integer Optional Defaults to 1
            stream=data.get('stream', False),  # boolean Optional Defaults to false
            stop=data.get('stop', None),  # string or array Optional Defaults to null
            max_tokens=data.get('max_tokens', float('inf')),  # integer Optional Defaults to inf
            presence_penalty=data.get('presence_penalty', 0),  # number Optional Defaults to 0
            frequency_penalty=data.get('frequency_penalty', 0),  # number Optional Defaults to 0
            logit_bias=data.get('logit_bias', None),  # map Optional Defaults to null
            user=data.get('user', None),  # string Optional
        )

        # Return the response from OpenAI to the client
        return jsonify(response)

    except KeyError as e:
        # Return an error response if a required key is missing in the request body
        return jsonify({'error': f'Required key "{e.args[0]}" is missing in the request body.'}), 400
    except Exception as e:
        # Return an error response for any other exceptions
        return jsonify({'error': str(e)}), 500


# Start the Flask server
if __name__ == '__main__':
    app.run(debug=True, port=3000)
