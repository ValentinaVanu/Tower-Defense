import * as constant from './monkey.constant';

const initialState = {
  id: [],
  // placed: [],
  // selected: {
  //   type: '',
  //   img: ''
  // },
}


export const monkeyReducer = ( state = initialState, action ) => {
  switch (action.type) {
      case constant.SELECT_MONKEY:
        return {
          ...state,
          selected: action.selected
        }
      case constant.SET_MONKEY_ID: 
        return {
          ...state,
          id: [
            ...state.id,
            action.id
          ]
        }
    default:
      return state
  }
}
