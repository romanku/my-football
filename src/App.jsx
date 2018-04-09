import React from 'react';
import CompetitionListContainer from './competition/CompetitionListContainer';
import FixturesNavigationBarContainer from './fixtures/navigation/FixturesNavigationBarContainer';

const App = () => (
	<div>
		<FixturesNavigationBarContainer />
		<CompetitionListContainer />
	</div>
);

export default App;
