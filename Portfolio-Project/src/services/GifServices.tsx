import axios from 'axios'
import { useEffect, useState } from 'react'

export const GifService = () => {
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		axios
			.get('https://api.giphy.com/v1/gifs/trending', {
				params: {
					api_key: 'w2KURvTdH8tb1o1SgeQEariVSqfUBBeh',
					limit: 10,
				},
			})
			.then(({ data }) => {
				const formattedGifs = data.data.map((gif) => ({
					image: gif.images.downsized_medium.url,
				}))
				setGifs(formattedGifs)
			})
	}, [])

	return gifs
}
