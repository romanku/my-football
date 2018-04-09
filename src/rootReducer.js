import { combineReducers } from 'redux';
import { competitions, competitionsIsLoading } from './competition/competitionReducer';

import { selectedDate } from './fixtures/navigation/fixturesNavigationBarReducer';

export default combineReducers({ competitions, competitionsIsLoading, selectedDate });
