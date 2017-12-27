import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview.js';
import axios from 'axios';


class ArticlePreviewHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    axios.get('http://localhost:3001/getArticlePreviews')
      .then((response) => {
        this.setState({
          previews: response.data.articles
        });
      });
  }

  componentWillUnmount() {
    console.log('previews holder unmount');
  }

  render() {
    return (
      <div>
        {
          this.state.previews && this.state.previews.map((prev) => {
            return (<ArticlePreview key={prev.id} {...prev} />)
          })
        }
      </div>
    );
  }
}

export default ArticlePreviewHolder;
