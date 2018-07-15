import * as types from './fixtureCompetitionActionType';

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

export const isCompetitionsFetchError = (state = false, actions) => {
	switch (actions.type) {
		case types.COMPETITIONS_FETCH_ERROR:
			return actions.isFetchError;
		default:
			return state;
	}
};
