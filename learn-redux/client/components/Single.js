import React, { Component } from 'react'
import { Photo } from './Photo'
import { Comments } from './Comments'

export class Single extends Component {
  render () {
    const { posts, params: { postId } } = this.props
    const i = posts.findIndex(({ code }) => code === postId)
    const post = posts[i]

    return (
      <div className='single-photo'>
        <Photo key={i} index={i} post={post} {...this.props} />
        <Comments />
      </div>
    )
  }
}
