import React from "react";
import { StoicQuoteService } from "../../Services/StoicQuoteServices";

export const StoicQuote = () => {
	const quote = StoicQuoteService();
	return (
		<div className='default-container'>
			{quote ? (
				<p>
					{quote.quote} <br />
					<br /> - {quote.author ? quote.author : "Unkown"}
				</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
