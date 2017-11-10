import React, { Component } from 'react';

class Article extends Component {
	constructor(props) {
		super(props);
		this.id = props.id;
		this.text = props.text;
		this.title = props.title;
	}

	render() {
		return (
			<div>
    		  <h3>{this.title}</h3>
      			<div>
      				<p>{this.text}</p>
      			</div>
      		</div>
		);
	}
}

export default Article;

