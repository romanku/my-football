import * as types from './fixturesNavigationActionType';
import { fetchCompetitions } from '../competition/fixtureCompetitionAction';

export const changeSelectedDate = (selectedDate) => (dispatch) => {
	dispatch(setSelectedDate(selectedDate));
	dispatch(fetchCompetitions(selectedDate));
};

export const setSelectedDate = (selectedDate) => {
	return {
		type: types.SET_SELECTED_DATE,
		selectedDate
	};
};
