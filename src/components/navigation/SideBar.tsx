import React from 'react'

const SideBar = () => {
	return (
		<div
			id='side-bar'
			className='side-bar'
		>
			<a href='#about-me'>
				<img
					src='./src/assets/images/personIcon.png'
					alt='image icon'
				/>
			</a>
			<a href='#projects'>
				<img
					src='./src/assets/images/projectsIcon.png'
					alt='image icon'
				/>
			</a>
			<a href='#resume'>
				<img
					src='./src/assets/images/resumeIcon.png'
					alt='image icon'
				/>
			</a>

			<a href='#image-slider'>
				<img
					src='./src/assets/images/imageIcon.png'
					alt='image icon'
				/>
			</a>
		</div>
	)
}

export default SideBar
