import * as types from './eventActionType';

export const updateEvents = (events) => {
	return {
		type: types.UPDATE_EVENTS,
		events
	};
};
