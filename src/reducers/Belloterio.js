import { GET_MENU, ERROR_REQUEST, GET_HOME_INFO, GET_CALCULATOR_INFO } from '../constants/types'

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
    case GET_CALCULATOR_INFO:
      return {
        ...state,
        configInfo: payload
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
