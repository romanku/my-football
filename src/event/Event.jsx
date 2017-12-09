import React from 'react';
import './Event.scss';

function formatDate(stringDate) {
	const date = new Date(stringDate);
	return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

const Event = (prop) => (
	<div className="event">
		<div className="event-start">{formatDate(prop.event.date)}</div>
		<div className="event-team home">{prop.event.homeTeamName}</div>
		<div className="event-score"></div>
		<div className="event-team away">{prop.event.awayTeamName}</div>
	</div>
	);

export default Event;