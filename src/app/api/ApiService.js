import * as footballDataApi from './FootballDataApiService';
import * as mockApi from './MockApiService';

const currentService = footballDataApi;

export function getCompetitions(...args) {
	return currentService.getCompetitions(...args);
}
