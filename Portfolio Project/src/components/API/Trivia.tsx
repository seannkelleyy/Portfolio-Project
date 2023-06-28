import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

type Trivia = {
    category: string;
    question: string;
    answer: string;
}

function TriviaAndAnswer() {
    const [trivia, setTrivia] = useState<Trivia | null>(null);
    const [showAnswer, setShowAnswer] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const key = 'odGOiSepqFpCCqEER8Rhtg==dB7kB8Zj1Zomb08K';

    const config = {
        headers: {
            'X-API-Key': key
        }
    };

    function handleClick() {    
        setShowAnswer(!showAnswer);
    }

    function createCall() {
            axios.get('https://api.api-ninjas.com/v1/trivia?category=', config)
                .then(({ data }) => {
                    setTrivia(data[0]);
                })
                .catch(error => {
                    setError(error);
                });
    }

    return (
        <div className='default-container'>
            <div className='btn-group'>
                <button onClick={createCall}>New Question</button>
                <button onClick={handleClick}>{(showAnswer) ? "Show Question" : "Show Answer"}</button>
                </div>
            {(trivia) ?
                <p>Category: {trivia.category} <br /> {(showAnswer) ? trivia.answer : trivia.question}</p> :
                <p>Click the New Question button to display a question!</p>}
        </div>
        );
} 


export default TriviaAndAnswer;