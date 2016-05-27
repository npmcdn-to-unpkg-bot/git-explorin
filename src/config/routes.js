import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  RepoContainer,
  UserContainer,
} from 'containers'

export default function routes () {
  return (
    <Router history={hashHistory}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
        <Route path='/:username' component={UserContainer} />
        <Route path='/:username/:repo/:branch' component={RepoContainer} />
      </Router>
    </Router>
  )
}
