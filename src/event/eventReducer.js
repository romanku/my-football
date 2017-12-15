import * as types from './eventActionType';

export default (state = [], actions) => {
	switch (actions.type) {
		case types.UPDATE_EVENTS:
			return actions.events;
		default:
			return state;
	}
}