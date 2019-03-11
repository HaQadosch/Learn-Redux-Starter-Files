export const increment = index => ({
  type: 'INCREMENT_LIKE',
  index
})

export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
})

export const removeComment = (postId, index) => ({
  type: 'REMOVE_COMMENT',
  postId,
  index
})
