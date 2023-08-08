import './InfoSections.css'
import { ProjectsData } from '../../assets/data/ProjectsData'
import React from 'react'

const Projects = () => {
	return (
		<div className='projects-section'>
			<h2>Projects</h2>
			{ProjectsData.map((project, index) => {
				return (
					<p key={index}>
						<a href={project.link}>
							<img
								src={project.image}
								alt={project.title}
							/>
						</a>
					</p>
				)
			})}
		</div>
	)
}

export default Projects
