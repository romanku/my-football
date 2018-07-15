import { combineReducers } from 'redux';
import {
	competitions,
	competitionsIsLoading,
	isCompetitionsFetchError
} from './fixtures/competition/fixtureCompetitionReducer';
import { selectedDate } from './fixtures/navigation/fixturesNavigationBarReducer';

export default combineReducers({
	competitions,
	competitionsIsLoading,
	isCompetitionsFetchError,
	selectedDate
});
