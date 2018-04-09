import React from 'react';
import FixtureEventList from '../event/FixtureEventList';

import './FixtureCompetition.scss';

const FixtureCompetition = ({ competition }) => {
	return (
		<div className="competition">
			<div className="competition-title">{`${competition.country}: ${competition.caption}`}</div>
			<FixtureEventList events={competition.events} />
		</div>
	);
};

export default FixtureCompetition;
