import React from 'react'
import { StoicQuoteService } from '../../Services/StoicQuoteServices'

export const StoicQuote = () => {
	const quote = StoicQuoteService()
	return (
		<div className='default-container'>
			<h3>Food for thought</h3>
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
