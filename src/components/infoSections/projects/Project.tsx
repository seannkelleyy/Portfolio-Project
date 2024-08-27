import React from 'react'
import { Project } from '../../../hooks/types/project'

type ProjectProps = {
	project: Project
	key: number
}

export const ProjectItem = ({ project, key }: ProjectProps) => {
	return (
		<section
			title={project.title}
			className='project'
			key={key}
		>
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
		</section>
	)
}

