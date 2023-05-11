import React, {useState} from 'react';

interface Message {
    role: string;
    content: string;
}

interface ChatCompletion {
    id: string;
    object: string;
    created: number;
    choices: {
        index: number;
        message: {
            role: string;
            content: string;
        };
        finish_reason: string;
    }[];
    usage: {
        prompt_tokens: number;
        completion_tokens: number;
        total_tokens: number;
    };
}

function Chat(): JSX.Element {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleMessageSend = async () => {
        if (input.trim() !== '') {
            const newMessage: Message = {
                role: 'user',
                content: input.trim(),
            };

            try {
                const response = await fetch('http://localhost:4000/v1/chat/completions', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        temperature: 0.8,
                        model: 'gpt-3.5-turbo',
                        messages: [...messages, newMessage],
                    }),
                });

                const data: ChatCompletion = await response.json();

                const newMessages = data.choices[0].message.content
                    .split('\n')
                    .map((message: string) => ({role: 'Assistant', content: message}));

                setMessages([...messages, ...newMessages]);
                setInput('');
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
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
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && input === '') {
                                e.preventDefault();
                            } else if (e.key === 'Enter') {
                                handleMessageSend().then((r) => r);
                            }
                        }}
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-send"
                        disabled={!input}
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
