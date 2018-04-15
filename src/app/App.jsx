import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import FixtureCompetitionListContainer from './fixtures/competition/FixtureCompetitionListContainer';
import FixturesNavigationBarContainer from './fixtures/navigation/FixturesNavigationBarContainer';

import './App.scss';

const App = () => (
	<div className="main-wrapper">
		<Header />
		<div className="app-content">
			<FixturesNavigationBarContainer />
			<FixtureCompetitionListContainer />
		</div>
		<Footer />
	</div>
);

export default App;
