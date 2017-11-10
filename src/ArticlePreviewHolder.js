import React, { Component } from 'react';
import ArticlePreview from './ArticlePreview.js';


class ArticlePreviewHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {previews: []};
    this.updatePreviews = this.updatePreviews.bind(this);
  }

  updatePreviews(newPrevs) {
    this.setState({
        previews: newPrevs
    });
  }

  componentWillMount() {
    let request = new XMLHttpRequest();
    request.onload = () => {
      let previewsArr = JSON.parse(request.response).articles;
      this.updatePreviews(previewsArr);
    }
    request.open('GET','http://localhost:3001/getArticlePreviews');
    request.send();
  }

  render() {
    return (
      <div>
        {
          this.state.previews.map((prev, i) => {
            return (<ArticlePreview key={i} {...prev} />)
          })
        }
      </div>
    );
  }
}

export default ArticlePreviewHolder;
