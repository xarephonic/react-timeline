import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ArticlePreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
        <div>
    		  <h3>{this.props.title}</h3>
      		<div>
      			<p>{this.props.text} <Link to={'/article/'+this.props.id}>Read more</Link></p>
      		</div>
      	</div>
    );
  }
}

export default ArticlePreview;
