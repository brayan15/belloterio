import React from 'react'
import storeInit from '../../../../__mocks__/store'
import GlobalNavContainer, { GlobalNav } from './GlobalNav'

describe('<GlobalNav />', () => {
  let wrapper
  const originalError = console.error
  beforeAll(() => {
    console.error = (...args) => {
      if (/Warning./.test(args[0])) {
        return
      }
      originalError.call(console, ...args)
    }
  })

  afterAll(() => {
    console.error = originalError
  })

  const defaultProps = {
    navItems: [{ text: 'Home', route: '/home' }, { text: 'About', route: '/about' }],
    setNavItems: jest.fn()
  }

  describe('GlobalNavContainer', () => {
    beforeEach(() => {
      const initialState = {
        Bellotorio: {
          navItems: []
        }
      }
      const store = storeInit(initialState)
      wrapper = shallow(<GlobalNavContainer store={store} />)
    })

    it('should run GlobalNavContainer component with store', () => {
      const { children } = wrapper.props()
      expect(children.props.navItems).toEqual([])
    })
  })

  describe('GlobalNav', () => {
    beforeEach(() => {
      wrapper = shallow(<GlobalNav {...defaultProps} />, { disableLifecycleMethods: false })
    })

    it('Should render with defaults props and with 2 items on menu', () => {
      const content = wrapper.find('.nav-bar')
      const navItems = wrapper.find('.nav-bar__item')

      expect(content.exists()).toBe(true)
      expect(navItems).toHaveLength(2)
      expect(defaultProps.setNavItems).toHaveBeenCalled()
    })

    it('Should render with defaults props and 0 items on menu', () => {
      wrapper.setProps({ navItems: [] })
      const content = wrapper.find('.nav-bar')
      const navItems = wrapper.find('.nav-bar__item')

      expect(content.exists()).toBe(true)
      expect(navItems).toHaveLength(0)
    })
  })
})
