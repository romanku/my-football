import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Header from './Header';
import { changeSelectedDate } from '../fixtures/navigation/fixturesNavigationAction';

class HeaderContainer extends Component {
	constructor({ dispatch }) {
		super();

		this.dispatch = dispatch;
		this.onHomeButtonClicked = this.onHomeButtonClicked.bind(this);
	}

	onHomeButtonClicked() {
		this.dispatch(changeSelectedDate(moment()));
	}

	render() {
		return <Header onHeaderClicked={this.onHomeButtonClicked} />;
	}
}

export default connect()(HeaderContainer);
