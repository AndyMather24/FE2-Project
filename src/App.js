import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header.jsx';
import * as api from './api';
import { Router } from '@reach/router';
import Topics from './components/Topics/Topics';

class App extends Component {
	state = {
		topics: []
	};
	render() {
		return (
			<div className="App">
				<header className="header-section">
					<Header />
				</header>

				<Router>
					<Home path="/" topics={this.state.topics} />
					<Topics path="/topics/:topicslug" />
				</Router>
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
