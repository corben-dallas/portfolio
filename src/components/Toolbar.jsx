import React from 'react';

const Toolbar = ({
	filters,
	selected,
	onSelectFilter,
}) => 
	<div className="btn-group">
		{
			filters.map((item, index) => (
				<button
					key={index}
					onClick={() => { onSelectFilter(item) }}
					className={`btn ${item === selected ? 'btn--active' : ''}`}
				>
					{item}
				</button>
			))
		}
	</div>

export default Toolbar;
