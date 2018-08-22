import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from './Header';
import { changeSelectedDate } from '../fixtures/navigation/fixturesNavigationAction';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {
	constructor({ dispatch, history }) {
		super();

		this.dispatch = dispatch;
		this.history = history;
		this.onHomeButtonClicked = this.onHomeButtonClicked.bind(this);
	}

	onHomeButtonClicked() {
		this.dispatch(changeSelectedDate(moment()));
		this.history.push('/');
	}

	render() {
		return <Header onHeaderClicked={this.onHomeButtonClicked} />;
	}
}

export default withRouter(connect()(HeaderContainer));
