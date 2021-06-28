import * as constant from "./slider-menu.constant";

// export const setSelectedMonkey = (selected) => ({
//   type: constant.SELECTED_MONKEY,
//   selected,
// });

export const setSelectedMonkey = (selectedName, selectedId) => ({
  type: constant.SELECTED_MONKEY,
  selectedName,
  selectedId,
});

export const setSliderAction = (show) => ({
  type: constant.SET_SLIDER,
  show,
});
