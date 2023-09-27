import React from 'react'

const SideBar = () => {
	return (
		<div
			id='side-bar'
			className='side-bar'
		>
			<a href='#about-me'>
				<img
					src='/personIcon.png'
					alt='image icon'
				/>
			</a>
			<a href='#projects'>
				<img
					src='/projectsIcon.png'
					alt='image icon'
				/>
			</a>
			<a href='#resume'>
				<img
					src='/resumeIcon.png'
					alt='image icon'
				/>
			</a>

			<a href='#image-slider'>
				<img
					src='/imageIcon.png'
					alt='image icon'
				/>
			</a>
		</div>
	)
}

export default SideBar
