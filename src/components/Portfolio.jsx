import React from 'react';
import { useState } from 'react';

import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

import Projects from '../dictionary/projects';

const Portfolio = () => {
	const [selected, setSelected] = useState('All');
	const [projects, setProjects] = useState(Projects);

	const onSelectFilter = (filter) => {
		if (filter === selected) return;

		setSelected(filter);

		if (filter === "All") {
			setProjects(Projects);
			return;
		}

		setProjects(Projects.filter(item => item.category === filter));
	}

	return (
		<div className="wrapper">
			<Toolbar 
				filters={["All", "Websites", "Flayers", "Business Cards"]}
				selected={selected}
				onSelectFilter={onSelectFilter}
			/>
			<ProjectList 
				projects={projects}
			/>
		</div>
	);
};

export default Portfolio;
