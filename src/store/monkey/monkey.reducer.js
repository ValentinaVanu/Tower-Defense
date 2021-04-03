import * as constant from './monkey.constant';

const initialState = {
  coordinate: {
    x: -100,
    y: -100,
  },
  placed: []
}


export const monkeyReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case constant.MONKEY_COORDINATE:
      return {
        ...state,
        coordinate: action.coordinate
      }
    case constant.PLACED_MONKEY:
      return {
        ...state,
        placed: [
          ...state.placed,
          action.placed
        ]
      }
  
    default:
      return state
  }
}