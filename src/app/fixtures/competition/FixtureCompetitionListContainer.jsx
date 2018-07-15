import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FixtureCompetitionList from './FixtureCompetitionList';
import { fetchCompetitions } from './fixtureCompetitionAction';
import Loading from '../../generic/loading/Loading';
import Info from '../../generic/info/Info';

class FixtureCompetitionListContainer extends Component {
	componentDidMount() {
		this.props.fetchCompetitions();
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
		fetchCompetitions: () => dispatch(fetchCompetitions())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FixtureCompetitionListContainer);
