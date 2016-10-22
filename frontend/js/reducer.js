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
    default:
      return state
  }
}
