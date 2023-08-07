import './NameAndPhoto.css'
import React from 'react'

const NameAndPhoto = () => {
	return (
		<section
			id='name-and-photo'
			className='name-and-photo'
		>
			<div className='name'>
				<h1>Hi, I&#39;m Sean.</h1>
			</div>
			<div className='main-image'>
				<img
					src='./src/Assets/Images/Sean.jpg'
					alt='Sean Kelley'
				/>
			</div>
			<div className='intro'>
				<p>
					I am a software engineering intern at Neudesic and a student at The Ohio State University. I am very interested in full-stack development, with experience working with C#
					and .NET, as well as ReactJS. Software development is my passion and I am always looking to learn new things.
				</p>
			</div>
			<br />
		</section>
	)
}

export default NameAndPhoto
