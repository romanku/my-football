import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FixtureCompetitionList from './FixtureCompetitionList';
import { fetchCompetitions } from './fixtureCompetitionAction';

class FixtureCompetitionListContainer extends Component {
	componentDidMount() {
		this.props.fetchCompetitions();
	}

	render() {
		const { isLoading, competitions } = this.props;

		if (isLoading) {
			return <div>Loading...</div>;
		} else if (competitions.length === 0) {
			return <div>No events</div>;
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
		competitions: state.competitions
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCompetitions: () => dispatch(fetchCompetitions())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FixtureCompetitionListContainer);
