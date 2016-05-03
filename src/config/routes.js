import React from 'react'
import { Router, browserHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
} from 'containers'

export default function routes () {
  return (
    <Router history={browserHistory}>
      <Router path='/' component={MainContainer}>
        <IndexRoute component={HomeContainer} />
      </Router>
    </Router>
  )
}
