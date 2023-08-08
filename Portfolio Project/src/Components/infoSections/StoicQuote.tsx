import React from 'react'
import { StoicQuoteService } from '../../services/StoicQuoteServices'

export const StoicQuote = () => {
	const quote = StoicQuoteService()
	return (
		<div className='quote-section'>
			<h2>Food for thought</h2>
			{quote ? (
				<p>
					{quote.quote} <br />
					<br /> - {quote.author ? quote.author : 'Unkown'}
				</p>
			) : (
				<p>Loading...</p>
			)}
		</div>
	)
}
