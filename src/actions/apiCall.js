import { GET_MENU, ERROR_REQUEST, GET_HOME_INFO, GET_CALCULATOR_INFO } from '../constants/types'
import { getNavService, getHomeService, getCalcuService } from '../services/dataApi'

export const setNav = items => ({
  type: GET_MENU,
  payload: items
})

export const setHome = slider => ({
  type: GET_HOME_INFO,
  payload: slider
})

export const setCalculator = calculator => ({
  type: GET_CALCULATOR_INFO,
  payload: calculator
})

export const errorFetchData = payload => ({
  type: ERROR_REQUEST,
  payload
})

export const setNavItems = () => dispatch =>
  getNavService()
    .then(menu => {
      const { items } = menu
      dispatch(setNav(items))
    })
    .catch(error => {
      dispatch(errorFetchData(error.response.status))
    })

export const setHomeInfo = () => dispatch =>
  getHomeService()
    .then(slider => {
      dispatch(setHome(slider))
    })
    .catch(error => {
      dispatch(errorFetchData(error.response.status))
    })

export const setCalculatorInfo = () => dispatch =>
  getCalcuService()
    .then(calculator => {
      dispatch(setCalculator(calculator))
    })
    .catch(error => {
      dispatch(errorFetchData(error.response.status))
    })
