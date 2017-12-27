import React, { Component } from 'react';
import Article from './Article.js';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';

class ArticleSoloHolder extends Component {
	constructor(props) {
		super(props);
		this.state = {article: null};
	}

	componentWillMount() {
		let articleId = this.props.match.params.id;

		axios.get('http://localhost:3001/article/'+articleId)
			.then((response) => {
				this.setState({
					article: response.data
				});
			});
	}

	componentWillUnmount() {
		console.log('solo holder unmount');
	}

	render() {
		return (
			<div>
				{
					this.state.article && <Article {...this.state.article} />
				}
				<Button onClick={this.props.history.goBack}>Go Back</Button>
			</div>
		);
	}
}

export default ArticleSoloHolder;

