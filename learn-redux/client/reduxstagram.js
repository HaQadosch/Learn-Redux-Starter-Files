import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { PhotoGrid } from './components/PhotoGrid'
import { Single } from './components/Single'
import css from './styles/style.styl'

import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import { store, history } from './store'

const route = (
  <Provider store={store} >
    <Router history={history} >
      <Route path='/' component={App} >
        <IndexRoute component={PhotoGrid} />
        <Route path='/view/:postId' component={Single} />
      </Route>
    </Router>
  </Provider>
)

render(route, document.querySelector('#root'))
