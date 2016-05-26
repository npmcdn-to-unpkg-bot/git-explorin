import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  RepoContainer,
} from 'containers'

export default function routes () {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='/:username/:repo(/:branch)' component={RepoContainer} />
      </Router>
    </Router>
  )
}
