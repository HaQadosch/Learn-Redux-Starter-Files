import React, { Component } from 'react'

export class Comments extends Component {
  handleSubmit (evt) {
    evt.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
  }

  renderForm () {
    return (
      <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref='author' placeholder='author' />
        <input type='text' ref='comment' placeholder='comment' />
        <input type='submit' hidden />
      </form>
    )
  }

  renderComments (postComments) {
    return postComments.map(({ user, text }, i) => <div className='comment' key={i} >
      <p>
        <strong>{user}</strong>
        {text}
        <button className='remove-comment'>&times;</button>
      </p>
    </div>)
  }

  render () {
    const postComments = this.props.postComments
    console.log({ postComments })

    return (
      <div className='comments'>
        { this.renderComments(postComments) }
        { this.renderForm()}
      </div>
    )
  }
}
