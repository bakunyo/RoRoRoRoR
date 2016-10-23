import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from './reducer'
import Comments from './comments'
import CommentForm from './comment_form'

const store = createStore(reducer)

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h1>{ this.props.title }</h1>
        <div>{ this.props.body }</div>
        <Comments comments={ this.props.comments }/>
        <CommentForm addComment={ this.props.addComment } />
      </div>
    );
  }
}

// action creators
const sendComment = (value) => {
  return {
    type: 'SEND_COMMENT',
    value: value
  }
}

// container
const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => {
  return {
    addComment(value) {
      dispatch(sendComment(value));
    }
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Article);

render(
  <Provider store={ store }>
    <Container />
  </Provider>,
  document.getElementById('article')
);
