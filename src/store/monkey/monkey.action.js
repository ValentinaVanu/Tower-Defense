import * as constant from './monkey.constant';

export const setMonkeyCoordinateAction = (coordinate) => ({
  type: constant.MONKEY_COORDINATE,
  coordinate
})

export const setSelectedMonkeyAction = selected => ({
  type: constant.SELECT_MONKEY,
  selected
})

export const setPlacedMonkeyAction = placed => ({
  type: constant.PLACED_MONKEY,
  placed
})