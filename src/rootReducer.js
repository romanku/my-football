import { combineReducers } from 'redux';
import {
	competitions,
	competitionsIsLoading
} from './competition/competitionReducer';

export default combineReducers({ competitions, competitionsIsLoading });
