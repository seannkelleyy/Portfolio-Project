import React from 'react'
import NavBar from './components/navigation/NavBar'
import SideBar from './components/navigation/SideBar'
import AboutMe from './components/aboutMe/AboutMe'
import Projects from './components/infoSections/Projects'
import Resume from './components/infoSections/Resume'
import ImageSlider from './components/imageSlider/ImageSlider'
import Contact from './components/infoSections/Contact'

const App = () => {
	return (
		<>
			<header>
				<NavBar />
				<SideBar />
			</header>
			<AboutMe />
			<div className='page'>
				<Projects />
				<Resume />
				<ImageSlider />
				<footer>
					<Contact />
				</footer>
			</div>
		</>
	)
}

export default App
