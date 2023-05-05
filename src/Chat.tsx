// This is a Chat component that will be used to display the chat messages
// The chat messages from API gateway will be sent to this component
// The logic using fetch to get data form API gateway

import React, {useState} from 'react';

function Chat(): JSX.Element {
    const [messages, setMessages] = useState<{ role: string; content: string; }[]>([]);
    const [input, setInput] = useState('');

    // Send the messages to the API gateway and get the response from the API gateway

    const sendMessages = async (messages: { role: string; content: string; }[]) => {
        const response = await fetch('https://api.sunsun.dev:3000/v1/chat/completions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                temperature: 0.8,
                model: 'gpt-3.5-turbo',
                messages
            }),
        });
        try {
            const data = await response.json();
            setMessages(data.choices[0].text.split('\n').map((message: string) => ({
                role: 'AI',
                content: message,
            })));
        } catch (error) {
            console.log(error);
        }
    };

    if (messages.length > 0) {
        sendMessages(messages).then(r => console.log(r));
    }


    const handleMessageSend = (message: string) => {
        if (message !== '') {
            setMessages([...messages, {role: 'User', content: message}]);
            setInput('');
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
                                handleMessageSend(input);
                            }
                        }}
                    />
                    {/* Add button to send message to the api server and the message also displayed in card-body */}
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-send"
                        disabled={!input} // Disable empty message to be sent
                        onClick={() => handleMessageSend(input)}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
