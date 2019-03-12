import React, { Component } from 'react'

export class Comments extends Component {
  renderForm () {
    return (
      <form ref='commentForm' className='comment-form'>
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
