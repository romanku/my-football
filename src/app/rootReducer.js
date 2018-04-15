import { combineReducers } from 'redux';
import { competitions, competitionsIsLoading } from './fixtures/competition/fixtureCompetitionReducer';
import { selectedDate } from './fixtures/navigation/fixturesNavigationBarReducer';

export default combineReducers({ competitions, competitionsIsLoading, selectedDate });
