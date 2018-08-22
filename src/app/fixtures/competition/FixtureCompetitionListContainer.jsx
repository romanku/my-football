import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FixtureCompetitionList from './FixtureCompetitionList';
import { changeSelectedDate } from '../navigation/fixturesNavigationAction';
import Loading from '../../generic/loading/Loading';
import Info from '../../generic/info/Info';
import moment from 'moment';

class FixtureCompetitionListContainer extends Component {
	constructor({ match }) {
		super();

		this.match = match;
	}

	componentDidMount() {
		const date = this.match.params.date;
		const formattedDate = date ? moment(date, 'YYYYMMDD') : moment();

		this.props.changeSelectedDate(formattedDate);
	}

	render() {
		const { isLoading, competitions, isFetchError } = this.props;

		if (isLoading) {
			return <Loading />;
		} else if (isFetchError) {
			return <Info msg="Unable to fetch events. Try again later." />;
		} else if (competitions.length === 0) {
			return <Info msg="No events" />;
		}

		return <FixtureCompetitionList competitions={competitions} />;
	}
}

FixtureCompetitionListContainer.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	competitions: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.competitionsIsLoading,
		competitions: state.competitions,
		isFetchError: state.isCompetitionsFetchError
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeSelectedDate: (date) => dispatch(changeSelectedDate(date))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FixtureCompetitionListContainer);
