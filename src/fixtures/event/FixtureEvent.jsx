import React from 'react';
import FixtureEventScore from './score/FixtureEventScore';

import './FixtureEvent.scss';

function formatDate(stringDate) {
	const date = new Date(stringDate);
	return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const FixtureEvent = (prop) => {
	const { date, homeTeamName, awayTeamName, score, status } = prop.event;

	return (
		<div className="event">
			<div className="event-start">{formatDate(date)}</div>
			<div className="event-team home">{homeTeamName}</div>
			<FixtureEventScore score={score} status={status} />
			<div className="event-team away">{awayTeamName}</div>
		</div>
	);
};

export default FixtureEvent;
