import React, { Component } from 'react';
import './Articles.css';
class Articles extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="articles-container">
				{this.props.articlesData.length &&
					this.props.articlesData.map((article) => {
						return (
							<div key={article._id} className="article-info-container">
								<img src="https://picsum.photos/150/150/?random" />
								<h4 className="title">{article.title}</h4>
								<p className="votes">Likes:{article.votes}</p>
								<p className="comments">Comments: {article.comment_count}</p>
							</div>
						);
					})}
			</div>
		);
	}
}

export default Articles;
