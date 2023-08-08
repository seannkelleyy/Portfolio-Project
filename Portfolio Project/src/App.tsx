import Goals from './components/infoSections/Goals'
import Resume from './components/infoSections/Resume'
import Projects from './components/infoSections/Projects'
import NameAndPhoto from './components/aboutMe/AboutMe'
import ImageSlider from './components/ImageSlider/ImageSlider'
import { SideBar } from './components/navigation/sideBar'
import React from 'react'
import NavBar from './components/navigation/NavBar'
import { StoicQuote } from './components/infoSections/StoicQuote'

const App = () => {
	return (
		<>
			<NavBar />
			<SideBar />
			<NameAndPhoto />
			<div className='page'>
				<StoicQuote />
				<Goals />
				<Projects />
				<Resume />
				<ImageSlider />
			</div>
		</>
	)
}

export default App
