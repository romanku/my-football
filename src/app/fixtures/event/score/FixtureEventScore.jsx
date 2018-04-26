import React from 'react';
import matchStatus from '../../../constants/matchStatus';

import './FixtureEventScore.scss';

const FixtureEventScore = (prop) => {
	const { status } = prop;

	if (status === matchStatus.TIMED || status === matchStatus.POSTPONED) {
		return <span className="fixture-event-vs">vs</span>;
	}

	const { home, away } = prop.score;

	return (
		<div className={`fixture-event-score ${prop.status === matchStatus.IN_PLAY ? 'inplay' : ''}`}>
			<div className="fixture-event-score-item">{home}</div>
			<span>:</span>
			<div className="fixture-event-score-item">{away}</div>
		</div>
	);
};

export default FixtureEventScore;
