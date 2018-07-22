import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import Footer from './footer/Footer';
import FixtureCompetitionListContainer from './fixtures/competition/FixtureCompetitionListContainer';
import FixturesNavigationBarContainer from './fixtures/navigation/FixturesNavigationBarContainer';

import './App.scss';

const App = () => (
	<div className="main-wrapper">
		<HeaderContainer />
		<div className="app-content">
			<FixturesNavigationBarContainer />
			<FixtureCompetitionListContainer />
		</div>
		<Footer />
	</div>
);

export default App;
