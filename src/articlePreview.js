import React, { Component } from 'react';


class ArticlePreview extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.text = props.text;
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

export default ArticlePreview;
