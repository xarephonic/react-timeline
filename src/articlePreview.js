import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ArticlePreview extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.text = props.text;
    this.id = props.id
  }

  render() {
    

    return (
        <div>
    		  <h3>{this.title}</h3>
      		<div>
      			<p>{this.text} <Link to={'/article/'+this.id}>Read more</Link></p>
      		</div>
      	</div>
    );
  }
}

export default ArticlePreview;
