import React, { useState } from 'react';
import './Chatbot.css';

import { Configuration, OpenAIApi } from 'openai';

const API_KEY = "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";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    async function callOpenAIAPI(){
        console.log("Calling API");

        const APIBody = {
            "model": "text-davinci-003",
            "prompt": message + "\nAI:",
            "temperature": 0.9,
            "max_tokens": 2048,
            "top_p": 1,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.6,
            "stop": ["\n"]
        };
        
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY,
            },
            body: JSON.stringify(APIBody)
        });
        
        const data = await response.json();
        console.log(data.choices[0].text);
        setResponse(data.choices[0].text.trim());
    }

    return (
        <div className='Chatbot'>
            <h1>Chat with the VSN Bot!</h1>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Type your message here'
                    cols={50}
                />
            </div>
            <div>
                <button onClick={callOpenAIAPI}>Send Message</button>
            </div>
            <div>
                {response !== "" ?
                    <h3>Bot: {response}</h3>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default Chatbot;
