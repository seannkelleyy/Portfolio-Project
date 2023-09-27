import './InfoSections.css'
import React from 'react'

const Resume = () => {
	return (
		<article
			id='resume'
			className='resume-section'
		>
			<h2>Resume</h2>
			<section className='resume'>
				<img
					className='resume-img'
					src='/seansResume.png'
					alt='Seans Resume'
					height='100%'
				/>
			</section>
			<button className='standard-button'>
				<a href='/Sean Kelley Resume 2023.pdf'>Download</a>
			</button>
		</article>
	)
}

export default Resume
