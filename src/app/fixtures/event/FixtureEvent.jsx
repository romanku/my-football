import React from 'react';
import FixtureEventScore from './score/FixtureEventScore';
import matchStatus from '../../constants/matchStatus';
import moment from 'moment';

import './FixtureEvent.scss';

function formatDate(stringDate) {
	const date = new Date(stringDate);
	return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

const getStatus = (status, date) => {
	switch (status) {
		case matchStatus.TIMED:
		case matchStatus.SCHEDULED:
			return moment(date).format('HH:mm');
		case matchStatus.IN_PLAY:
			return 'Inplay';
		case matchStatus.FINISHED:
			return 'Finished';
		case matchStatus.POSTPONED:
			return 'Postponed';
		default:
			return '';
	}
};

const FixtureEvent = (props) => {
	const { id, date, homeTeamName, awayTeamName, score, status } = props.event;

	const handleClick = () => {
		props.onEventClicked(id);
	};

	return (
		<div className="event" onClick={handleClick}>
			<div className={`event-status ${status === matchStatus.IN_PLAY ? 'inplay' : ''}`}>
				{getStatus(status, date)}
			</div>
			<div className="event-team home">{homeTeamName}</div>
			<FixtureEventScore score={score} status={status} />
			<div className="event-team away">{awayTeamName}</div>
		</div>
	);
};

export default FixtureEvent;
