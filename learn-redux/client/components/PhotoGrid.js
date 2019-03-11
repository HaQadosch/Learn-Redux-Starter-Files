import React, { Component } from 'react'
import { Photo } from './Photo'

export class PhotoGrid extends Component {
  render () {
    return (
      <div className='photo-grid'>
        { this.props.posts.map((post, index) => <Photo key={index} {...this.props} index={index} post={post} />)}
      </div>
    )
  }
}
