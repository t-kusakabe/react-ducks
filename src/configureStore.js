import {createStore as reduxCreateStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import counterReducer from './modules/Counter'

const createStore = () => {
  return reduxCreateStore(
    combineReducers({
      counter: counterReducer
    }),
    applyMiddleware(
      logger
    )
  )
}

export default createStore
