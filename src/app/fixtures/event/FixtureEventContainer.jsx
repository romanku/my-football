import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FixtureEvent from './FixtureEvent';
import { fetchMatch } from './fixtureEventAction';

class FixtureEventContainer extends Component {
	constructor({ dispatch }) {
		super();

		this.dispatch = dispatch;
		this.onEventClicked = this.onEventClicked.bind(this);
	}

	onEventClicked(id) {
		this.dispatch(fetchMatch(id));
	}

	render() {
		return <FixtureEvent event={this.props.event} onEventClicked={this.onEventClicked} />;
	}
}

FixtureEventContainer.propTypes = {
	event: PropTypes.object.isRequired
};

export default connect()(FixtureEventContainer);
