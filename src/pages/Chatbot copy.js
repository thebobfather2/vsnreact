import React, { useState } from 'react';

const API_KEY = "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";

function Chatbot() {
    const [tweet, setTweet] = useState("");
    const [sentiment, setSentiment] = useState("");
    
    async function callOpenAIAPI(){
        console.log("Calling API");

        const APIBody = {
            "model": "text-davinci-003",
            "prompt": "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: I'd like to cancel my subscription.\nAI:",
            "temperature": 0.9,
            "max_tokens": 150,
            "top_p": 1,
            "frequency_penalty": 0.0,
            "presence_penalty": 0.6,
            "stop": [" Human:", " AI:"]
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
        setResponse(data.choices[0].text.trim());
    }

    return (
        <div className='App'>
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