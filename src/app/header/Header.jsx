import React from 'react';
import './Header.scss';

const Header = (props) => (
	<header className="app-header">
		<span className="app-header-title" onClick={props.onHeaderClicked}>
			My Football
		</span>
	</header>
);

export default Header;
