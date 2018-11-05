import React, { Component } from 'react';
import './Articles.css';
class Articles extends Component {
	render() {
		return (
			<div className="articles-container">
				{this.props.articlesData.length &&
					this.props.articlesData.map((article) => {
						return (
							<div key={article._id} className="article-info-container">
								<img src="https://loremflickr.com/125/125" alt="placeholder img" />
								<h6 className="title">{article.title}</h6>
								<p className="votes">Likes:{article.votes}</p>
								<p className="comments">Comments: {article.comment_count}</p>
							</div>
						);
					})}
			</div>
		);
	}
	componentDidMount = () => {};
}

export default Articles;
