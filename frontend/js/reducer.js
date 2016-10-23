const initialState = {
  title: 'Article Title',
  body: 'Article Body',
  comments: [
    'Good morning.',
    'Good afternoon.',
    'Good bye.'
  ]
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SEND_COMMENT':
      return Object.assign({}, state, {
        comments: state.comments.concat([action.value])
      });
    default:
      return state
  }
}
