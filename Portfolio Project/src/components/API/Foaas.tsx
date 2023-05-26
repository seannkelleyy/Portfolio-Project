import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';

type FO = {
    message: string;
    subtitle: string;
}

function StoicQuote() {
    const [fo, setFo] = useState<FO | null>(null);
    const [error, setError] = useState<Error | null>(null);


    useEffect(() => {
        axios.get(`https://www.foaas.com/programmer/Admin`, {headers: { 'Accept': 'application/json' } })
            .then(({ data }) => { 
                setFo(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    return (
        <div>
            {(fo) ? <p>{fo.message} {fo.subtitle}</p> : <p>Loading...</p>}
        </div>
        );
    } 


export default StoicQuote;