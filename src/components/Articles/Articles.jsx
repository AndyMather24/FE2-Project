import React, { Component } from 'react';

class Articles extends Component {
	render() {
		return (
			<div>
				{this.props.articlesData.length &&
					this.props.articlesData.map((article) => {
						return (
							<div key={article._id}>
								<h4>{article.title}</h4>
							</div>
						);
					})}
			</div>
		);
	}
}

export default Articles;
