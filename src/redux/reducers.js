import { combineReducers } from 'redux'
import { reduxTokenAuthReducer } from 'redux-token-auth'
import beersReducer from "./beers-reducer";

const rootReducer = combineReducers({
  reduxTokenAuth: reduxTokenAuthReducer,
  beersReducer
})

export default rootReducer
