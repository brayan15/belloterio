import Belloterio from './Belloterio'
import { GET_MENU, ERROR_REQUEST, GET_HOME_INFO } from '../constants/types'

describe('Reducer', () => {
  test('Should return INITIAL_STATE', () => {
    const INITIAL_STATE = {}
    expect(Belloterio(undefined, {})).toEqual(INITIAL_STATE)
  })

  test('Should handle GET_MENU', () => {
    const EXPECTED_STATE = { navItems: [{ text: 'dummy', route: '/dummy' }] }
    const DISPATCHED_ACTION = { type: GET_MENU, payload: [{ text: 'dummy', route: '/dummy' }] }
    expect(Belloterio(undefined, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('Should handle GET_HOME_INFO', () => {
    const EXPECTED_STATE = { homeInfo: { title: 'title' } }
    const DISPATCHED_ACTION = { type: GET_HOME_INFO, payload: { title: 'title' } }
    expect(Belloterio(undefined, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('Should handle ERROR_REQUEST', () => {
    const EXPECTED_STATE = { error: 400 }
    const DISPATCHED_ACTION = { type: ERROR_REQUEST, payload: 400 }
    expect(Belloterio(undefined, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })
})
