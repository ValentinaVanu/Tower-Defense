import { combineReducers } from 'redux'
import { authReducer } from './auth/auth.reducer'
import { monkeyReducer } from './monkey/monkey.reducer'
import { sliderReducer } from './slider-menu/slider-menu.reducer'

const createReducer = asyncReducers => combineReducers({
  monkey: monkeyReducer,
  slider: sliderReducer,
  auth: authReducer,
  ...asyncReducers
})

export default createReducer
