import './GoalsProjectsHobbies.css'
import { GoalsData } from '../../Assets/Data/GoalsData'
import React from 'react'

const Goals = () => {
	return (
		<div
			id='goals'
			className='goals-section'
		>
			<h2>Goals</h2>
			{GoalsData.map((goal, index) => {
				return <p key={index}>{goal.goal}</p>
			})}
		</div>
	)
}

export default Goals
