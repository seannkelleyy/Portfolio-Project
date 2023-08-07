import { useState, useEffect } from "react";
import axios from "axios";

type Quote = {
	author: string;
	quote: string;
};

export const StoicQuoteService = () => {
	const [quote, setQuote] = useState<Quote | null>(null);

	useEffect(() => {
		axios
			.get(`https://api.themotivate365.com/stoic-quote`)
			.then(({ data }) => {
				setQuote(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return quote;
};
