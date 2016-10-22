import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from './reducer'
import Comments from './comments'

const store = createStore(reducer)

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h1>{ this.props.title }</h1>
        <div>{ this.props.body }</div>
        <Comments comments={ this.props.comments }/>
      </div>
    );
  }
}

// container
const mapStateToProps = (state) => {
  return state;
}
const Container = connect(mapStateToProps)(Article);

render(
  <Provider store={ store }>
    <Container />
  </Provider>,
  document.getElementById('article')
);
