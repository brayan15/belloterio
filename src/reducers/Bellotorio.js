import { GET_MENU } from '../constants/types'

const initialState = {}

const Bellorotio = (state = initialState, action) => {
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

export default Bellorotio
