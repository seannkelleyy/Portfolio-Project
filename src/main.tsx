import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AboutMe from './components/aboutMe/AboutMe.js'
import ImageSlider from './components/imageSlider/ImageSlider.js'
import Contact from './components/infoSections/Contact.js'
import Projects from './components/infoSections/Projects.js'
import Resume from './components/infoSections/Resume.js'
import { NavBar } from './components/navigation/NavBar.js'
import SideBar from './components/navigation/SideBar.js'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
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
	</React.StrictMode>,
)

