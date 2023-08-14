import './Navigation.css'
import React from 'react'
import { useState, useEffect } from 'react'

const LightModeButton = () => {
	const [lightMode, setLightMode] = useState(findDefaultMode)

	function findDefaultMode() {
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark'
		} else {
			return 'light'
		}
	}

	function toggleLightMode() {
		lightMode === 'light' ? setLightMode('dark') : setLightMode('light')
	}

	useEffect(() => {
		document.body.className = lightMode
	}, [lightMode])

	return (
		<button
			className='light-mode-button'
			onClick={toggleLightMode}
		>
			<img
				alt='Screen Mode'
				src={lightMode === 'light' ? './src/Assets/Images/lightMode.svg' : './src/Assets/Images/darkMode.png'}
				width='45'
				height='45'
			/>
		</button>
	)
}

export default LightModeButton
