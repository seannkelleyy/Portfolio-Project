import './AboutMe.css'
import React from 'react'

const NameAndPhoto = () => {
	return (
		<article
			id='about-me'
			className='name-and-photo'
		>
			<div className='name'>
				<h1>Hi, I&#39;m Sean.</h1>
			</div>
			<div className='main-image'>
				<img
					src='/sean.jpg'
					alt='Sean Kelley'
				/>
			</div>
			<div className='intro'>
				<p>
					I am a senior at The Ohio State University. I have experience in full stack development using React, .NET, Docker and Azure while working on a team using AGILE. I am
					currently seeking a full-time position as a software engineer starting in January 2025 and a part-time position until then.
				</p>
			</div>
			<br />
		</article>
	)
}

export default NameAndPhoto

