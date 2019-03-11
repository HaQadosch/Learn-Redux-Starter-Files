const incrementLikes = (state, index) => {
  return [
    ...state.slice(0, index),
    { ...state[index], likes: state[index].likes + 1 },
    ...state.slice(index + 1)
  ]
}

export const posts = (state = [], { type, index, ...action }) => {
  const actions = {
    'INCREMENT_LIKE': incrementLikes
  }
  let newState = state
  try {
    newState = actions[type](state, index)
  } catch (error) {
    newState = state
  }

  return newState
}
