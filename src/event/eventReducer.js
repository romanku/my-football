import * as types from './eventActionType';

export const eventsIsLoading = (state = false, actions) => {
	switch (actions.type) {
		case types.EVENTS_IS_LOADING:
			return actions.isLoading;
		default:
			return state;
	}
};

export const events = (state = [], actions) => {
	switch (actions.type) {
		case types.UPDATE_EVENTS:
			return actions.events;
		default:
			return state;
	}
};
