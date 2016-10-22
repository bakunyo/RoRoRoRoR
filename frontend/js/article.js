import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import Comments from './comments'

const store = createStore(reducer)

class Article extends React.Component {
  render() {
    return (
      <div className="article">
        <h1>{ title }</h1>
        <div>{ body }</div>
        <Comments comments={ comments }/>
      </div>
    );
  }
}

render(
  <Article />,
  document.getElementById('article')
);
