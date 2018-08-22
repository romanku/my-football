import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import App from './App';
import './styles/global.scss';
import '../assets/images/favicon.ico';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('main')
);
