import React from 'react';
import PropTypes from 'prop-types';
import FixtureCompetition from './FixtureCompetition';

const FixtureCompetitionList = ({ competitions }) => {
	return (
		<div>
			{competitions.map((competition) => <FixtureCompetition key={competition.id} competition={competition} />)}
		</div>
	);
};

FixtureCompetitionList.propTypes = {
	competitions: PropTypes.array.isRequired
};

export default FixtureCompetitionList;
