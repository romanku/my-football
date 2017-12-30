import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EventList from './EventList';
import { getEvents } from '../api/ApiService';
import { updateEvents } from './eventAction';

class EventListContainer extends React.Component {
	componentDidMount() {
		const { store } = this.context;

		this.unsubscribe = store.subscribe(() => {
			this.forceUpdate();
		});

		getEvents((data) => {
			const action = updateEvents(data);
			store.dispatch(action);
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();
		const events = state.events;

		if (events.length === 0) {
			return <div>No events</div>;
		}
		return <EventList events={state.events} />;
	}
}

EventListContainer.contextTypes = {
	store: PropTypes.object
};

export default EventListContainer;
