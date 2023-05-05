// This is a Chat component that will be used to display the chat messages
// The chat messages from API gateway will be sent to this component
// The logic using fetch to get data form API gateway

import React, {useState} from 'react';

function Chat(): JSX.Element {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState('');

    const handleMessageSend = async () => {
        if (input.trim() !== '') {
            const newMessage = {
                role: 'User',
                content: input.trim(),
            };

            // Send current messages to the API gateway
            try {
                const response = await fetch('http://localhost:3000/v1/chat/completions', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        temperature: 0.8,
                        model: 'gpt-3.5-turbo',
                        messages: [...messages, newMessage],
                    }),
                });

                const data = await response.json();

                // Split the returned message into separate message objects and update the state
                const newMessages = data.choices[0].text
                    .split('\n')
                    .map((message: string) => ({role: 'AI', content: message}));

                setMessages([...messages, ...newMessages]);
                setInput(''); // 清空输入框
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        // Display the chat messages using bootstrap and keep the input field at the bottom of the page
        <div className="container">
            <div className="row">
                <div className="col">
                    {messages.map((message, index) => (
                        <div key={index} className="row">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{message.role}</h5>
                                        <p className="card-text">{message.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="col">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message here..."
                        aria-label="Type your message here..."
                        aria-describedby="button-send"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        // add enter to submit
                        onKeyDown={(e) => {
                            // Disable empty message to be sent
                            if (e.key === 'Enter' && input === '') {
                                e.preventDefault();
                            } else if (e.key === 'Enter') {
                                handleMessageSend().then(r => r);
                            }
                        }}
                    />
                    {/* Add button to send message to the api server and the message also displayed in card-body */}
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-send"
                        disabled={!input} // Disable empty message to be sent
                        onClick={handleMessageSend}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
