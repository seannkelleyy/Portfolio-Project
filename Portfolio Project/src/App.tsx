import Goals from './Components/GoalsProjectsHobbies/Goals'
import Hobbies from './Components/GoalsProjectsHobbies/Hobbies'
import Projects from './Components/GoalsProjectsHobbies/Projects'
import NameAndPhoto from './Components/NameAndPhoto/NameAndPhoto'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import { SideBar } from './components/NavBar/sideBar'
import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { StoicQuote } from './Components/GoalsProjectsHobbies/StoicQuote'

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
				<Hobbies />
				<ImageSlider />
			</div>
		</>
	)
}

export default App
