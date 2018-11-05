import React, { Component } from 'react';

import * as api from '../../api.js';
import './Home.css';
import Articles from '../Articles/Articles.jsx';
import Chart from '../Topic_chart/Chart';
class Home extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<div className="homepage">
				<section className="chart-section">
					<Chart topics={this.props.topics} />
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
