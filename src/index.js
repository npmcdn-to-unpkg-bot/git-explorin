import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from 'config/routes'
import configureStore from 'store/configureStore.js'
import './styles/main.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {routes()}
  </Provider>,
  document.getElementById('app'))
