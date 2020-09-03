import React from 'react'

const ProjectList = ({ 
	projects, 
}) =>
	<div className="projects"> 
		{ 
			projects.map(project => 
				<div className="projects__logo">
					<img 
						key={project.id} 
						src={project.img} 
						alt={project.alt}
					/>
				</div>) 
		}
	</div>

export default ProjectList
