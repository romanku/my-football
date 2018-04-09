import React from 'react';
import PropTypes from 'prop-types';
import Event from './FixtureEvent';

const FixtureEventList = ({ events }) => {
	return <div>{events.map((event) => <Event key={event.id} event={event} />)}</div>;
};

FixtureEventList.propTypes = {
	events: PropTypes.array.isRequired
};

export default FixtureEventList;
