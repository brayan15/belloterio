/* import Promise from 'promise' */
import mockStore from '../../__mocks__/store'
import { getNavService, getHomeService, getCalcuService } from '../services/dataApi'
import { setNavItems, setHomeInfo, setCalculatorInfo } from './apiCall'
import { ERROR_REQUEST, GET_HOME_INFO, GET_MENU, GET_CALCULATOR_INFO } from '../constants/types'

jest.mock('../services/dataApi')

const mockMenu = {
  menu: {
    items: [
      {
        text: 'Testimonial',
        route: 'page-1'
      }
    ]
  }
}

const mockSlider = {
  slider: {
    title: 'Our customers love us',
    reviews: [
      {
        name: 'Pete Zahut',
        position: 'Chief @ Maniak',
        comment: 'some description'
      }
    ]
  }
}

const mockConfig = {
  calculator: {
    title: 'Save more with Bellotero.io',
    description:
      'With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.'
  }
}

describe('Api Call', () => {
  describe('getMenuInfo flow', () => {
    test('getNavItems', () => {
      getNavService.mockImplementation(() => Promise.resolve([mockMenu]))
      const expectedActions = [{ type: GET_MENU, payload: undefined }]
      const store = mockStore({})

      return store.dispatch(setNavItems()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    test('getNavItems Error', () => {
      getNavService.mockImplementation(() => Promise.reject({ response: { status: 400 } }))
      const expectedActions = [{ type: ERROR_REQUEST, payload: 400 }]
      const store = mockStore({})

      return store.dispatch(setNavItems()).catch(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('setHomeInfo flow', () => {
    test('setHomeInfo', () => {
      getHomeService.mockImplementation(() => Promise.resolve([mockSlider]))
      const expectedActions = [{ type: GET_HOME_INFO, payload: [mockSlider] }]
      const store = mockStore({})

      return store.dispatch(setHomeInfo()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    test('setHomeInfo Error', () => {
      getHomeService.mockImplementation(() => Promise.reject({ response: { status: 400 } }))
      const expectedActions = [{ type: ERROR_REQUEST, payload: 400 }]
      const store = mockStore({})

      return store.dispatch(setHomeInfo()).catch(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('setCalculatorInfo flow', () => {
    test('setCalculatorInfo', () => {
      getCalcuService.mockImplementation(() => Promise.resolve([mockConfig]))
      const expectedActions = [{ type: GET_CALCULATOR_INFO, payload: [mockConfig] }]
      const store = mockStore({})

      return store.dispatch(setCalculatorInfo()).then(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

    test('setCalculatorInfo Error', () => {
      getCalcuService.mockImplementation(() => Promise.reject({ response: { status: 400 } }))
      const expectedActions = [{ type: ERROR_REQUEST, payload: 400 }]
      const store = mockStore({})

      return store.dispatch(setCalculatorInfo()).catch(() => {
        // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
