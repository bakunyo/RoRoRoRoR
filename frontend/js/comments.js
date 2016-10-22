import React from 'react'

export default class Comments extends React.Component {
  render() {
    const comment_list = this.props.comments.map((comment) => {
      return (<li>{ comment }</li>);
    });

    return (
      <ul className="comments">
        { comment_list }
      </ul>
    );
  }
}
