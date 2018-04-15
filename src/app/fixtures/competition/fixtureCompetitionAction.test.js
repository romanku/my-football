import * as actions from './fixtureCompetitionAction';
import * as types from './fixtureCompetitionActionType';

describe('Actions', () => {
	it('should create competitions loading action', () => {
		const isLoading = true;

		const expectedAction = {
			type: types.COMPETITIONS_IS_LOADING,
			isLoading
		};

		const competitionsIsLoadingAction = actions.competitionsIsLoading(isLoading);

		expect(competitionsIsLoadingAction).toEqual(expectedAction);
	});

	it('should create update competitions action', () => {
		const competitions = [{ id: 1 }, { id: 2 }];

		const expectedAction = {
			type: types.UPDATE_COMPETITIONS,
			competitions
		};

		const updateCompetitionsAction = actions.updateCompetitions(competitions);

		expect(updateCompetitionsAction).toEqual(expectedAction);
	});
});
