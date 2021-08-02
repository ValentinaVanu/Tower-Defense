import * as constant from './auth.constant'

export const initialState = {
  isLogged: false,
  user: null,
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case constant.LOG_IN:
      return {
        ...state,
        isLogged: true
      }
    case constant.LOG_OUT:
      return {
        isLogged: false,
        user: null
      }
    case constant.SET_USER:
      return {
        ...state,
        isLogged: !!action.user,
        user: action.user
      }
    default:
      return state
  }
}
