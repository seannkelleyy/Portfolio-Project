import './InfoSections.css'
import React from 'react'

const Resume = () => {
	return (
		<div className='resume-section'>
			<h2>Resume</h2>
			<div className='resume'>
				<img
					src='./src/assets/images/seansResume.png'
					alt='Seans Resume'
					height='100%'
				/>
				<div className='standard-button'>
					<button>
						<a href='./src/assets/resumeSean Kelley Resume 2023.pdf'>Download</a>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Resume
