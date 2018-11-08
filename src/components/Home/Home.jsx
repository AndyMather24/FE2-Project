import React, { Component } from 'react';

import * as api from '../../api.js';
import './Home.css';
import Articles from '../Articles/Articles.jsx';
import Dashboard from '../Dashboard/Dashboard.jsx';

class Home extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<div className="homepage">
				<section className="dashboard-section">
					<Dashboard topics={this.props.topics} />
				</section>
				<article className="main-articles">
					<Articles articlesData={this.state.articles} />
				</article>
			</div>
		);
	}

	componentDidMount = () => {
		console.log('Mounting home');
		api.fetchArticles().then((articles) => {
			this.setState({
				articles: articles
			});
		});
	};
}

export default Home;
