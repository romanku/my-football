import * as types from './navigationActionType';
import { fetchCompetitions } from '../../competition/competitionAction';

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
