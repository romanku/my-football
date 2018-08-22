import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import MainContainer from './main/MainContainer';
import Footer from './footer/Footer';

import './App.scss';

const App = () => (
	<div className="main-wrapper">
		<HeaderContainer />
		<MainContainer />
		<Footer />
	</div>
);

export default App;
