import { createStore, applyMiddleware } from 'redux'
import { batch, batching } from 'redux-batch-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunk, batch]

export default function configureStore (initialState) {
  const store = applyMiddleware(...middleware)(createStore)(batching(rootReducer))

  if (module.hot) {
    // Enables Webpacks hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
