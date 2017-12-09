import React from 'react';
import EventList from './event/EventList';

import {getFixtures} from './api/ApiService';

class App extends React.Component {
	constructor(props){
		super();
		this.state = {events: []}
	}

	componentDidMount() {
    	getFixtures((data) => {
			this.setState({events: data});
		});
  	}

	render(){
		return <EventList events={this.state.events}/>
	}
}
export default App;