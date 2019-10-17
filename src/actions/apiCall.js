import { GET_MENU } from '../constants/types'
import { getNavService } from '../services/dataApi'

// test action and async function
// https://redux.js.org/recipes/writing-tests#action-creators
// https://redux.js.org/recipes/writing-tests#async-action-creators
// https://redux.js.org/recipes/writing-tests#reducers
// https://michalzalecki.com/testing-redux-thunk-like-you-always-want-it/

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
