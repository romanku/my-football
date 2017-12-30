import { combineReducers } from 'redux';
import { events, eventsIsLoading } from './event/eventReducer';

export default combineReducers({ events, eventsIsLoading });
