import React, { Component } from 'react';
import ArticlePreview from './articlePreview.js';


class ArticlesHolder extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
      <div>
        <ArticlePreview />
        <ArticlePreview />
      </div>
    );
  }
}

export default ArticlesHolder;
