import eventTypes from './fixtureEventActionType';
import { getMatch } from '../../api/ApiService';

export const fetchMatch = (id) => (dispatch) => {
	getMatch(
		id,
		(data) => {
			console.log(data);
		},
		(error) => {
			console.log(error);
		}
	);
};
