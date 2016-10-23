import React from 'react'

export default class CommentForm extends React.Component {
  click(event) {
    event.preventDefault();
    this.props.addComment(this.refs.comment.value.trim());
    this.refs.comment.value = '';
    return;
  }

  render() {
    return(
      <form name="comemnt_form">
        <input ref="comment" type="text" />
        <button onClick={(event) => this.click(event)}>Send</button>
      </form>
    )
  }
}
