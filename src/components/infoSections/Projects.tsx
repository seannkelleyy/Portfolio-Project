import './InfoSections.css'
import { ProjectsData } from '../../data/ProjectsData'
import React from 'react'

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
						<p key={index}>
							<a
								className='link'
								href={project.link}
							>
								<img
									src={project.image}
									alt={project.title}
									className='project-image'
								/>
								<figcaption>{project.title}</figcaption>
							</a>
						</p>
					)
				})}
			</section>
		</article>
	)
}

export default Projects
