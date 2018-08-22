import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import moment from 'moment';

import FixtureCompetitionListContainer from '../fixtures/competition/FixtureCompetitionListContainer';
import FixturesNavigationBarContainer from '../fixtures/navigation/FixturesNavigationBarContainer';

class MainContainer extends Component {
	render() {
		const today = moment().format('YYYYMMDD');
		const homeRedirect = `/fixtures/date/${today}`;

		return (
			<Switch>
				<Route
					exact
					path="/"
					render={({ history, match }) => (
						<div className="app-content">
							<FixturesNavigationBarContainer history={history} />
							<FixtureCompetitionListContainer match={match} />
						</div>
					)}
				/>
				<Route
					path="/fixtures/date/:date"
					render={({ history, match }) => (
						<div className="app-content">
							<FixturesNavigationBarContainer history={history} />
							<FixtureCompetitionListContainer match={match} />
						</div>
					)}
				/>
			</Switch>
		);
	}
}

export default MainContainer;
