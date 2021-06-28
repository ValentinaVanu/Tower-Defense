import * as constant from "./slider-menu.constant";

const initialState = {
  show: false,
  selected: [
    {
      selectedName: "",
      selectedId: 0,
    },
  ],
};
export const sliderReducer = (state = initialState, action) => {
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
          { 
            selectedName: action.selectedName,
            selectedId: action.selectedId,
          },
        ],
      };
    // case constant.SELECTED_MONKEY_ID:
    //   return {
    //     ...state,
    //     selectedId: action.SELECTED_MONKEY_ID
    //   }
    default:
      return state;
  }
};
