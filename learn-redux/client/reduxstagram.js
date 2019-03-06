import React from 'react'
import { render } from 'react-dom'
import { Main } from './components/Main'
import { PhotoGrid } from './components/PhotoGrid'
import { Single } from './components/Single'
import css from './styles/style.styl'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const route = (
  <Router history={browserHistory} >
    <Route path='/' component={Main} >
      <IndexRoute component={PhotoGrid} />
      <Route path='/view/:postId' component={Single} />
    </Route>
  </Router>
)

render(route, document.querySelector('#root'))
