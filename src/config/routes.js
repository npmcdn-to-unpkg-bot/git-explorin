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
        <Route path='/:username' component={ProfileContainer} />
        <Route path='/:username/:repo(/:branch)' component={EditorContainer} />
        <Route path='/**' component={NotFound} />
      </Router>
    </Router>
  )
}
