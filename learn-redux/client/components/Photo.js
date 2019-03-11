import React, { Component } from 'react'
import { Link } from 'react-router'

import CSSTransitionGroup from 'react-addons-css-transition-group'

export class Photo extends Component {
  render () {
    const { post: { code, caption, display_src, likes }, index, comments } = this.props
    return (
      <figure className='grid-figure'>
        <div className='grid-photo-wrap'>
          <Link to={`/view/${code}`} >
            <img src={display_src} alt={caption} className='grid-photo' />
          </Link>
          <CSSTransitionGroup transitionName='like' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            <span key={likes} className='likes-heart'>{likes}</span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{caption}</p>
          <div className='control-buttons'>
            <button className='likes'>&hearts; {likes}</button>
            <Link className='button' to={`/view/${code}`}>
              <span className='comment-count'>
                <span className='speech-bubble' />
                {comments[code] ? comments[code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    )
  }
}
