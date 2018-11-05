import React, { Component } from 'react';
import * as api from '../../api.js';
import './Home.css';
import Articles from '../Articles/Articles.jsx';
import Header from '../Header/Header.jsx';
class Home extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<div className="homepage">
				<header className="header-section">
					<Header />
				</header>
				<section className="chart-section">CHARTS GOING HERE</section>
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
