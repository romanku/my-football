import React from 'react';
import PropTypes from 'prop-types';
import FixtureEventContainer from './FixtureEventContainer';

const FixtureEventList = ({ events }) => {
	return <div>{events.map((event) => <FixtureEventContainer key={event.id} event={event} />)}</div>;
};

FixtureEventList.propTypes = {
	events: PropTypes.array.isRequired
};

export default FixtureEventList;
