import React from 'react';
import matchStatus from '../../../constants/matchStatus';

import './FixtureEventScore.scss';

const FixtureEventScore = (prop) => {
	if (prop.status === matchStatus.TIMED) {
		return <span>vs</span>;
	}

	const { home, away } = prop.score;

	return (
		<div className="fixture-event-score">
			<div className="fixture-event-score-item">{home}</div>
			<span>:</span>
			<div className="fixture-event-score-item">{away}</div>
		</div>
	);
};

export default FixtureEventScore;
