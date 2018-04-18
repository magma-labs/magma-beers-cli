import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default () => createStore(
  rootReducer,
  applyMiddleware(thunk, loggerMiddleware)
);
