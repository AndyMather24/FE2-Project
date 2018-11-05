import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header.jsx';
import * as api from './api';

class App extends Component {
	state = {
		topics: []
	};
	render() {
		return (
			<div className="App">
				<header className="header-section">
					<Header topics={this.state.topics} />
				</header>
				<Home />
			</div>
		);
	}

	componentDidMount = () => {
		this.setTopics();
	};

	setTopics = () => {
		api.fetchTopics().then((topics) => {
			this.setState({
				topics: topics
			});
		});
	};
}

export default App;
