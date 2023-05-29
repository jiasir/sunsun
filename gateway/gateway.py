import os

from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

# Get api key from environment variable
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


@app.route('/v1/chat/completions', methods=['POST'])
def get_chat_completions():
    try:
        data = request.get_json()
        headers = {
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {OPENAI_API_KEY}'
        }
        response = requests.post('https://api.openai.com/v1/chat/completions', json=data, headers=headers)
        return jsonify(response.json()), response.status_code
    except Exception as e:
        print(e)
        return 'Something went wrong', 500


if __name__ == '__main__':
    app.run(debug=True, port=3000)
