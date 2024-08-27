import './InfoSections.css'
import { ProjectsData } from '../../data/ProjectsData'
import React from 'react'
import { ProjectItem } from './projects/Project'

const Projects = () => {
	return (
		<article
			id='projects'
			className='projects-section'
		>
			<h2>Projects</h2>
			<section className='projects-images-section'>
				{ProjectsData.map((project, index) => {
					return (
						<ProjectItem
							key={index}
							project={project}
						/>
					)
				})}
			</section>
		</article>
	)
}

export default Projects

