import * as types from './eventActionType';
import { getEvents } from '../api/ApiService';

export const fetchEvents = () => (dispatch) => {
	dispatch(eventsIsLoading(true));

	getEvents((data) => {
		dispatch(eventsIsLoading(false));
		dispatch(updateEvents(data));
	});
};

export const eventsIsLoading = (isLoading) => {
	return {
		type: types.EVENTS_IS_LOADING,
		isLoading
	};
};

export const updateEvents = (events) => {
	return {
		type: types.UPDATE_EVENTS,
		events
	};
};
