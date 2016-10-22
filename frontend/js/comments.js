import React from 'react'

const comments = [
  'Good morning.',
  'Good afternoon.',
  'Good bye.'
];

export default class Comments extends React.Component {
  render() {
    const comment_list = comments.map((comment) => {
      return (<li>{ comment }</li>);
    });

    return (
      <ul className="comments">
        { comment_list }
      </ul>
    );
  }
}
