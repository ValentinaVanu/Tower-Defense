import * as constant from './auth.constant'


export const loginAction = () => ({
  type: constant.LOG_IN
})

export const logoutAction = () => ({
  type: constant.LOG_OUT
})

export const setUserAction = ( user ) => ({
  type: constant.SET_USER,
  user
})
