import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './rootReducer';
import App from './App';
import './index.scss';

const store = createStore(rootReducer);
const main = document.getElementById('main');

const render = () => ReactDOM.render(<App store={store} />, main);

render();
store.subscribe(render);
