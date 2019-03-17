import React from 'react'
import { Link } from 'react-router'
import { ExampleBoundary } from './ExampleBoundary'

export class Main extends React.Component {
  render () {
    return (
      <div>
        <ExampleBoundary>
          <h1><Link to='/'>ReduxStagram</Link></h1>
          { React.cloneElement(this.props.children, this.props) }

        </ExampleBoundary>
      </div>
    )
  }
}
