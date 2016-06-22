import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  EditorContainer,
  ProfileContainer,
  NotFound,
} from 'containers'

export default function routes () {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='/404' component={NotFound} />
        <Route path='/:username' component={ProfileContainer} />
        <Route path='/:username/:repo/*' component={EditorContainer} />
      </Router>
    </Router>
  )
}
