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
    const [loading, setLoading] = useState(false);
    const [userMessages] = useState<Message[]>([]);

    const handleMessageSend = async () => {
        if (input.trim() !== '') {
            const newMessage: Message = {
                role: 'user',
                content: input.trim(),
            };

            setLoading(true);

            try {
                const response = await fetch('https://api.sunsun.dev:3000/v1/chat/completions', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        temperature: 0.8,
                        model: 'gpt-3.5-turbo',
                        messages: [...messages, newMessage],
                    }),
                });

                const data: ChatCompletion = await response.json();

                // Check if there are empty choices, if not empty choices, add the new messages to the list
                if (data.choices && data.choices.length > 0) {
                    const newMessages = data.choices[0].message.content
                        .split('\n')
                        .map((message: string) => message.trim())
                        .filter(Boolean);
                    setMessages([...messages, newMessage, {role: 'assistant', content: newMessages.join('\n')}]);
                }

                setInput('');

            } catch (error) {
                console.log(error);
            }

            setLoading(false);
        }
    };
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            await handleMessageSend()
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover font-monospace">
                        <tbody>
                        {messages.map((message, index) => (
                            <tr key={index}>
                                <td>{message.role}</td>
                                <td className="text-start">
                                    <pre className="pre-scrollable" style={{
                                        whiteSpace: 'pre-wrap',
                                        wordWrap: 'break-word',
                                    }}>{message.content}</pre>
                                </td>
                            </tr>
                        ))}
                        {userMessages.map((message, index) => (
                            <tr key={index}>
                                <td>{message.role}</td>
                                <td className="text-start">
                                    <pre className="pre-scrollable" style={{
                                        whiteSpace: 'pre-wrap',
                                        wordWrap: 'break-word',
                                    }}>{message.content}</pre>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
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
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            className="btn btn-primary"
                            type="button"
                            id="button-send"
                            disabled={!input || loading}
                            onClick={handleMessageSend}
                        >
                            {loading ? (
                                <>
        <span className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true">
        </span>
                                    <span className="visually-hidden">Loading...</span>
                                </>
                            ) : (
                                <>Send</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
