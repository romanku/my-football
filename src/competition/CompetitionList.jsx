import React from 'react';
import PropTypes from 'prop-types';
import Competition from './Competition';

const CompetitionList = ({ competitions }) => {
	return (
		<div>
			{competitions.map((competition) => (
				<Competition key={competition.id} competition={competition} />
			))}
		</div>
	);
};

CompetitionList.propTypes = {
	competitions: PropTypes.array.isRequired
};

export default CompetitionList;
