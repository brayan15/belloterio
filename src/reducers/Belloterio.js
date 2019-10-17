import { GET_MENU } from '../constants/types'

const initialState = {}

// (state = initialState, { type, payload }) spreed operator

const Belloterio = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        navItems: action.navItems
      }
    default:
      return state
  }
}

export default Belloterio
