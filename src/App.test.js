import React from 'react'
import { Provider } from 'react-redux'
import storeInit from '../__mocks__/store'
import App from './App'

const initialState = {
  Bellotorio: {
    navItems: []
  }
}

const store = storeInit(initialState)

describe('App Component', () => {
  it('renders without crashing', () => {
    mount(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})
