/**
 * A component that allows the user to chat with an AI assistant using OpenAI's GPT-4 model.
 */
import React, {useEffect, useRef, useState} from "react";

import "bootstrap/dist/css/bootstrap.css";
import Info from "../src/info";

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
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [gateway] = useState("https://gateway.sunsun.dev/openai");

    /**
     * Handles sending a message to the chatbot.
     *
     * @async
     * @function handleMessageSend
     * @returns {Promise<void>} - A promise that resolves when the message has been sent.
     */
    const handleMessageSend = async (): Promise<void> => {
        if (input.trim() !== "") {
            const newMessage: Message = {
                role: "user",
                content: input.trim(),
            };

            setLoading(true);

            try {
                const response = await fetch(gateway, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        temperature: 0.8,
                        model: "gpt-4",
                        messages: [...messages, newMessage],
                    }),
                });

                const data: ChatCompletion = await response.json();

                // Check if there are empty choices, if not empty choices, add the new messages to the list
                if (data.choices && data.choices.length > 0) {
                    const newMessages = data.choices[0].message.content
                        .split("\n")
                        .map((message: string) => message.trim())
                        .filter(Boolean);
                    setMessages([
                        ...messages,
                        newMessage,
                        {role: "assistant", content: newMessages.join("\n")},
                    ]);
                }

                setInput("");
            } catch (error) {
                console.log(error);
            }

            setLoading(false);
        }
    };
    const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            await handleMessageSend();
        }
    };

    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messages.length > 0) {
            // @ts-ignore
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    return (
        <main className="container">
            <Info/>
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-10">
                    <div className="card font-monospace">
                        <div className="card-header text-center">Chat with Assistant</div>
                        <div className="card-body">
                            <div
                                className="overflow-auto"
                                style={{maxHeight: "500px"}}
                                ref={messagesEndRef}
                            >
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`d-flex justify-content-${
                                            message.role === "user" ? "end" : "start"
                                        } mb-3`}
                                    >
                                        <div
                                            ref={messagesEndRef}
                                            className={`rounded-3 px-3 py-2 ${
                                                message.role === "user"
                                                    ? "bg-primary text-white"
                                                    : "bg-secondary text-white"
                                            }`}
                                        >
                                            <big>
                                                {message.role === "user" ? "You:" : "Assistant:"}
                                            </big>
                                            <div>
                        <pre
                            style={{
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                            }}
                        >
                          {message.content}
                        </pre>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="input-group">
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
                      <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                      ></span>
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
            </div>
        </main>
    );
}

export default Chat;
