import React from 'react'
import { render } from 'react-dom'
import { Adrenaline, container } from 'adrenaline'

import Comments from './comments'
import CommentForm from './comment_form'

class Article extends React.Component {
  render() {
    const { title, body } = this.props

    return (
      <div className="article">
        <h1>{ title }</h1>
        <div>{ body }</div>
        <CommentForm addComment={ this.props.addComment } />
      </div>
    );
  }
}

class ArticleContainer extends React.Component {
  render() {
    let { _, article } = this.props
    article = article || {}

    return (
      <Article title={ article.title } body={ article.body } />
    )
  }
}

const Container = container({
  query: `
    query {
      article(id: 2) {
        title,
        body,
      }
    }
  `
})(ArticleContainer);

render(
  <Adrenaline endpoint="/queries">
    <Container />
  </Adrenaline>,
  document.getElementById('article')
);
