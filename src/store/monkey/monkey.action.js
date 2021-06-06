import * as constant from './monkey.constant';

export const setMonkeyId = id => ({
  type: constant.SET_MONKEY_ID,
  id
})

export const setSelectedMonkeyAction = selected => ({
  type: constant.SELECT_MONKEY,
  selected
})

export const setPlacedMonkeyAction = placed => ({
  type: constant.PLACED_MONKEY,
  placed
})
