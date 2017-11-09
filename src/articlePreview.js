import React, { Component } from 'react';


class ArticlePreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
    	<div>
    		<h3>Article Title</h3>
      		<div>
      			<p>Article Preview Text</p>
      		</div>
      	</div>
    );
  }
}

export default ArticlePreview;
