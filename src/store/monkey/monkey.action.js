import * as constant from './monkey.constant';

export const setMonkeyCoordinateAction = (coordinate) => ({
  type: constant.MONKEY_COORDINATE,
  coordinate
})

export const setPlacedMonkeyAction = placed => ({
  type: constant.PLACED_MONKEY,
  placed
})