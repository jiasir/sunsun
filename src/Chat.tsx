// This is a Chat component that will be used to display the chat messages
// The chat messages from API gateway will be sent to this component
// The logic using fetch to get data form API gateway

import React, { useState, useEffect } from 'react';

function Chat(): JSX.Element {
    const [messages, setMessages] = useState<{ role: string; content: string; }[]>([]);
    const [input, setInput] = useState('');

    // Send the messages to the API gateway and get the response from the API gateway
    useEffect(() => {
        // Define sendMessages function here
        const sendMessages = async () => {
            // Send the messages to the API gateway
            const response = await fetch('http://localhost:3000/v1/chat/completions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: messages }),
            });

            // Get the response from the API gateway
            const data = await response.json();

            // Set the messages state with the response from the API gateway
            setMessages(data);
        };

        sendMessages();
    }, [messages]);

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
            <div className="row">
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
                                if (e.key === 'Enter') {
                                    setMessages([...messages, { role: 'User', content: input }]);
                                    setInput('');
                                }
                            }}
                        />
                        {/* Add button to send message to the api server and the message also displayed in card-body */}
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="button-send"
                            onClick={() => {
                                setMessages([...messages, { role: 'User', content: input }]);
                                setInput('');
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chat;