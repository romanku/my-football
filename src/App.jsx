import React from 'react';
import EventList from './event/EventList';

import { getEvents } from './api/ApiService';

import { updateEvents } from './event/eventAction';

const App = ({ store }) => {
	const events = store.getState().events;

	getEvents((data) => {
		const action = updateEvents(data);
		store.dispatch(action);
	});
	return <EventList events={events} />;
};

export default App;
