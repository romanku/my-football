import React from 'react';
import Event from './Event';

const EventList = (props) => (
	<div>{props.events.map((event) => 
		<Event key={event.id} event={event}/>
	)}
	</div>
);

export default EventList;