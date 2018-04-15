import * as types from './fixturesNavigationActionType';
import moment from 'moment';

export const selectedDate = (state = moment(), actions) => {
	switch (actions.type) {
		case types.SET_SELECTED_DATE:
			return actions.selectedDate.clone();
		default:
			return state;
	}
};
