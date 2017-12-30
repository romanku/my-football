import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventList from './EventList';
import { fetchEvents } from './eventAction';

class EventListContainer extends Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchEvents());
	}

	render() {
		const { isLoading, events } = this.props;

		if (isLoading) {
			return <div>Loading...</div>;
		} else if (events.length === 0) {
			return <div>No events</div>;
		}
		return <EventList events={events} />;
	}
}

EventListContainer.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	events: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.eventsIsLoading,
		events: state.events
	};
};

export default connect(mapStateToProps)(EventListContainer);
