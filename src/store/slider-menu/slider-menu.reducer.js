import * as constant from './slider-menu.constant';

const initialState = {
  show: false,
}

export const sliderReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case constant.SET_SLIDER:
      return {
        ...state,
        show: action.show
      }
    default:
      return state
  }
}