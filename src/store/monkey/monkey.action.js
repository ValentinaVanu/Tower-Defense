import * as constant from './monkey.constant';

export const setMonkeyId = id => ({
  type: constant.SET_MONKEY_ID,
  id
})

export const setSelectedMonkeyAction = activeMonkey => ({
  type: constant.SELECT_MONKEY,
  activeMonkey
})

