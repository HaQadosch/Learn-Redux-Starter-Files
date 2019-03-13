const postComments = (state = {}, postId, { author: user, comment: text }) => {
  const prevComments = state[postId] || []

  return {
    ...state,
    [postId]: [...prevComments, { user, text }]
  }
}

const remComments = (state = {}, postId, { index }) => {
  const allComments = state[postId] || []
  const newComments = [
    ...allComments.slice(0, index),
    ...allComments.slice(index + 1)
  ]

  return {
    ...state,
    [postId]: newComments
  }
}

export const comments = (state = {}, { type, postId, ...action }) => {
  const actions = {
    'ADD_COMMENT': postComments,
    'REMOVE_COMMENT': remComments
  }
  let newState = state
  try {
    newState = actions[type](state, postId, action)
  } catch (error) {
    newState = state
  }

  return newState
}
