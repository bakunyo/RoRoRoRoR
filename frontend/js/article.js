import React from 'react'
import { render } from 'react-dom'
import Comments from './comments'

const title = 'Article Title';
const body = 'Article Body';
const comments = [
  'Good morning.',
  'Good afternoon.',
  'Good bye.'
];

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
