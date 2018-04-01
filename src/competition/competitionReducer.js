import * as types from './competitionActionType';

export const competitionsIsLoading = (state = false, actions) => {
	switch (actions.type) {
		case types.COMPETITIONS_IS_LOADING:
			return actions.isLoading;
		default:
			return state;
	}
};

export const competitions = (state = [], actions) => {
	switch (actions.type) {
		case types.UPDATE_COMPETITIONS:
			return actions.competitions;
		default:
			return state;
	}
};
