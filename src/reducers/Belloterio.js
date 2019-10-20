import { GET_MENU, ERROR_REQUEST, GET_HOME_INFO } from '../constants/types'

const initialState = {}

const Belloterio = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MENU:
      return {
        ...state,
        navItems: payload
      }
    case GET_HOME_INFO:
      return {
        ...state,
        homeInfo: payload
      }
    case ERROR_REQUEST:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}

export default Belloterio
