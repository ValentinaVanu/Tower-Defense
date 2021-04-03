import { combineReducers } from 'redux'
import { monkeyReducer } from './monkey/monkey.reducer'
import { sliderReducer } from './slider-menu/slider-menu.reducer'

const createReducer = asyncReducers => combineReducers({
  monkey: monkeyReducer,
  slider: sliderReducer,
  ...asyncReducers
})

export default createReducer