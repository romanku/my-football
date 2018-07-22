import React from 'react';
import PropTypes from 'prop-types';

import './FixturesNavigationBar.scss';

const FixturesNavigationBar = ({ selectedDate, onBackwardClicked, onForwardClicked }) => {
	return (
		<div className="fixtures-navigation-bar">
			<span className="fixtures-navigation-bar-title">Fixtures</span>
			<span className="fixtures-navigation-bar-date">{selectedDate}</span>
			<div className="fixtures-navigation-bar-button font-icon arrow backward" onClick={onBackwardClicked} />
			<div className="fixtures-navigation-bar-button font-icon arrow" onClick={onForwardClicked} />
		</div>
	);
};

FixturesNavigationBar.propTypes = {
	selectedDate: PropTypes.string.isRequired
};

export default FixturesNavigationBar;
