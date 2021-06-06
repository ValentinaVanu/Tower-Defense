import * as constant from "./slider-menu.constant";

const initialState = {
  show: false,
  selected: [],
};
export const sliderReducer = (state = initialState, action) => {
  console.log(state.selected)
  switch (action.type) {
    case constant.SET_SLIDER:
      return {
        ...state,
        show: action.show,
      };
    case constant.SELECTED_MONKEY:
      return {
        ...state,
        selected: [
          ...state.selected,
          action.selected,
        ],
      };
    default:
      return state;
  }
};
