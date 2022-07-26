import { combineReducers } from 'redux'
import counter from './counter'
import todos from './todos'
import loading from './loading'

const rootReducer = combineReducers({
  counter,
  todos,
})

export default rootReducer
