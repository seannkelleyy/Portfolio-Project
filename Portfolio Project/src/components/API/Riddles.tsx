import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

type Riddle = {
    title: string;
    question: string;
    answer: string;
}

function RiddleAndAnswer() {
    const [riddle, setRiddle] = useState<Riddle | null>(null);
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
            axios.get('https://api.api-ninjas.com/v1/riddles', config)
                .then(({ data }) => {
                    setRiddle(data[0]);
                })
                .catch(error => {
                    setError(error);
                });
    }

    return (
        <div className='default-container'>
            <div className='btn-group'>
                <button onClick={createCall}>New Riddle</button>
                <button onClick={handleClick}>{(showAnswer) ? "Show Question" : "Show Answer"}</button>
                </div>
            {(riddle) ?
                <p>{riddle.title} <br /> {(showAnswer) ? riddle.answer : riddle.question}</p> :
                <p>Click the New Riddle Button to display a riddle!</p>}
        </div>
        );
} 


export default RiddleAndAnswer;