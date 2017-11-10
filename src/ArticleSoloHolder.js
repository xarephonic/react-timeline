import React, { Component } from 'react';
import Article from './Article.js';
import Bootstrap from 'react-bootstrap';

class ArticleSoloHolder extends Component {
	constructor(props) {
		super(props);
		this.state = {article: null};
		this.updateArticle = this.updateArticle.bind(this);
	}

	updateArticle(newArticle) {
		this.setState({
			article: newArticle
		});
	}

	componentWillMount() {
		let articleId = this.props.match.params.id;


		let request = new XMLHttpRequest();
		request.onload = () => {
			let article = JSON.parse(request.response);
			this.updateArticle(article);
		}
		request.open('GET', 'http://localhost:3001/article/'+articleId);
		request.send();
	}

	componentWillUnmount() {
		console.log('solo holder unmount');
	}

	render() {
		return (
			<div>
				{
					this.state.article ? <Article {...this.state.article} /> : null
				}
				
			</div>
		);
	}
}

export default ArticleSoloHolder;

