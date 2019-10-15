import { GET_MENU } from '../constants/types'
import { getNavService } from '../services/dataApi'

export const getNav = items => ({
  type: GET_MENU,
  navItems: [...items]
})

export const getNavItems = () => dispatch =>
  getNavService()
    .then(navItems => {
      const { items } = navItems
      dispatch(getNav(items))
    })
    .catch(error => {
      console.log(error) // eslint-disable-line
    })
