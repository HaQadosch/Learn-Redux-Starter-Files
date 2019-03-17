import React, { Component } from 'react'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://6066970219f84edca9f1c5d21e8a75c3:ea93ab1403e4445eb6520c57ecffe23c@sentry.io/1417349'
})

export class ExampleBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render () {
    if (this.state.error) {
      // render fallback UI
      return (
        <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
      )
    } else {
      // when there's not an error, render children untouched
      return this.props.children
    }
  }
}
