import React, { Component } from 'react';
import Articles from '../Articles/Articles';
import './Topic.css';
import * as api from '../../api.js';
class Topic extends Component {
	state = {
		articles: []
	};
	render() {
		return (
			<div className="topic-list">
				<h2>{this.props.topicslug}</h2>
				<Articles articlesData={this.state.articles} topicslug={this.props.topicslug} />
			</div>
		);
	}

	componentDidUpdate = (prevProps) => {
		if (this.props.topicslug !== prevProps.topicslug) {
			this.setArticles(this.props.topicslug);
		}
	};
	componentDidMount = () => {
		console.log('mount');
		this.setArticles(this.props.topicslug);
	};

	setArticles = (topicslug) => {
		api.fetchArticlesByTopic(topicslug).then((articles) => {
			this.setState({
				articles: articles
			});
		});
	};
}

export default Topic;
