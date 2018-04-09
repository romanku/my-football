import * as types from './fixtureCompetitionActionType';
import { getCompetitions } from '../../api/ApiService';

export const fetchCompetitions = (selectedData) => (dispatch) => {
	dispatch(competitionsIsLoading(true));

	getCompetitions(selectedData, (data) => {
		dispatch(competitionsIsLoading(false));
		dispatch(updateCompetitions(data));
	});
};

export const competitionsIsLoading = (isLoading) => {
	return {
		type: types.COMPETITIONS_IS_LOADING,
		isLoading
	};
};

export const updateCompetitions = (competitions) => {
	return {
		type: types.UPDATE_COMPETITIONS,
		competitions
	};
};
