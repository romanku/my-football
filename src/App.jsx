import React from 'react';
import EventList from './event/EventList';

import {getFixtures} from './api/ApiService';

import {updateEvents} from './event/eventAction';

const App = ({store})  => {
	const events = store.getState().events;

	getFixtures((data) => {
		const action = updateEvents(data);
		store.dispatch(action);
	})
	return (<EventList events={events}/>);
}
	
export default App;