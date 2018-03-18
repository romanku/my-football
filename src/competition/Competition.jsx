import React from 'react';
import EventList from '../event/EventList';

import './Competition.scss';

const Competition = ({ competition }) => {
	return (
		<div className="competition">
			<div className="competition-title">{competition.id}</div>
			<EventList events={competition.events} />
		</div>
	);
};

export default Competition;
