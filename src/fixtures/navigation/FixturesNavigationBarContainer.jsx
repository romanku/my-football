import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSelectedDate } from './navigationAction';

import FixturesNavigationBar from './FixturesNavigationBar';

class FixturesNavigationBarContainer extends Component {
	constructor() {
		super();
		this.onBackwardClicked = this.onBackwardClicked.bind(this);
		this.onForwardClicked = this.onForwardClicked.bind(this);
	}

	onBackwardClicked() {
		const { selectedDate } = this.props;
		this.props.changeSelectedDate(selectedDate.add(-1, 'days'));
	}

	onForwardClicked() {
		const { selectedDate } = this.props;
		this.props.changeSelectedDate(selectedDate.add(1, 'days'));
	}

	render() {
		const { selectedDate } = this.props;

		return (
			<FixturesNavigationBar
				selectedDate={selectedDate.format('DD.MM.YYYY')}
				onBackwardClicked={this.onBackwardClicked}
				onForwardClicked={this.onForwardClicked}
			/>
		);
	}
}

FixturesNavigationBarContainer.propTypes = {
	selectedDate: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	return {
		selectedDate: state.selectedDate
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeSelectedDate: (newDate) => dispatch(changeSelectedDate(newDate))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FixturesNavigationBarContainer);
