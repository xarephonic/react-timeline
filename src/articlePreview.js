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
      <Link to={'/article/'+this.id}>
        <div>
    		  <h3>{this.title}</h3>
      		<div>
      			<p>{this.text}</p>
      		</div>
      	</div>
      </Link>
    );
  }
}

export default ArticlePreview;
