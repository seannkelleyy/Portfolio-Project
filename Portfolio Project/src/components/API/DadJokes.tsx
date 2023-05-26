import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

type Joke = {
    joke: string;
}

function DailyFact() {
    const [joke, setJoke] = useState<Joke | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const key = 'odGOiSepqFpCCqEER8Rhtg==dB7kB8Zj1Zomb08K';

    const config = {
        headers: {
            'X-API-Key': key
        }
    };

    useEffect(() => {
        axios.get(`https://api.api-ninjas.com/v1/dadjokes?limit=1`, config)
            .then(({ data } ) => {   
                setJoke(data[0]);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <div className='default-container'>
            <p>Enjoy this random dad joke!</p>
            <p>{(joke) ? joke.joke : "Loading..."}</p>
        </div>
        );
    } 


export default DailyFact;