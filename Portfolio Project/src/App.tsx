import React from 'react'
import NavBar from './components/navigation/NavBar'
import { SideBar } from './components/navigation/sideBar'
import NameAndPhoto from './components/aboutMe/AboutMe'
import { StoicQuote } from './components/infoSections/StoicQuote'
import Goals from './components/infoSections/Goals'
import Projects from './components/infoSections/Projects'
import Resume from './components/infoSections/Resume'
import ImageSlider from './components/imageSlider/ImageSlider'
import { Contact } from './components/infoSections/contact'

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
				<Contact />
			</div>
		</>
	)
}

export default App
