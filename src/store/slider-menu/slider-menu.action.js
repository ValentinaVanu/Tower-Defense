import * as constant from "./slider-menu.constant";

export const setSelectedMonkey = (selected) => ({
  type: constant.SELECTED_MONKEY,
  selected,
});

export const setSliderAction = (show) => ({
  type: constant.SET_SLIDER,
  show,
});
