import './InfoSections.css'
import { GoalsData } from '../../assets/data/GoalsData'
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
