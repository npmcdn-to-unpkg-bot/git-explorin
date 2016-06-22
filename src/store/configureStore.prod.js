import { createStore, applyMiddleware } from 'redux'
import { batch, batching } from 'redux-batch-middleware'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  return createStore(
    batching(rootReducer),
    initialState,
    applyMiddleware(
      batch,
      thunk
    )
  )
}
