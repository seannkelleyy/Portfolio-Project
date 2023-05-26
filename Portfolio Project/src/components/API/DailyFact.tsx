import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

type Fact = {
    text: string;
    source: string;
    source_url: string;
}

function DailyFact() {
    const [fact, setFact] = useState<Fact | null>(null);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/today`)
            .then(({ data } ) => {   
                setFact(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <div className='default-container'>
            {(fact) ? <p>Daily fact: {fact.text} <br/><br/> Source: <a href={fact.source_url}>{fact.source}</a></p> : <p>Loading...</p>}
        </div>
        );
    } 


export default DailyFact;