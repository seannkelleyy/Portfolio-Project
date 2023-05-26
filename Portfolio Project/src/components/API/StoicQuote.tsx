import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

type Quote = {
    author: string;
    quote: string;
}

function StoicQuote() {
    const [quote, setQuote] = useState<Quote | null>(null);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        axios.get(`https://api.themotivate365.com/stoic-quote`)
            .then(({ data }) => { 
                setQuote(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <div className='default-container'>
            {(quote) ? <p>{quote.quote} <br /><br /> - {(quote.author) ? quote.author : "Unkown"}</p> : <p>Loading...</p>}
        </div>
        );
    } 


export default StoicQuote;