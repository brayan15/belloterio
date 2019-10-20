import React from 'react'
import storeInit from '../../../__mocks__/store'
import TestimonialsContainer, { Testimonials } from './Testimonials'

describe('<Testimonials />', () => {
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
    navItems: {
      slider: {
        title: 'Our customers love us',
        reviews: [
          {
            name: 'Pete Zahut',
            position: 'Chief @ Maniak',
            comment:
              "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"
          },
          {
            name: 'Bernabe',
            position: 'Tech Lead @ Maniak',
            comment:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit.'
          }
        ]
      }
    },
    setHomeInfo: jest.fn()
  }

  describe('TestimonialsContainer', () => {
    beforeEach(() => {
      const initialState = {
        Belloterio: {
          homeInfo: {}
        }
      }
      const store = storeInit(initialState)
      wrapper = shallow(<TestimonialsContainer store={store} />)
    })

    it('should run TestimonialsContainer component with store', () => {
      const { children } = wrapper.props()
      expect(children.props.homeInfo).toEqual({})
    })
  })

  describe('Testimonials', () => {
    beforeEach(() => {
      wrapper = shallow(<Testimonials {...defaultProps} />, { disableLifecycleMethods: false })
    })

    it('Should render with defaults props and items on slide', () => {
      const content = wrapper.find('.testimonials-page__content')
      expect(content.exists()).toBe(true)
      expect(defaultProps.setHomeInfo).toHaveBeenCalled()
    })
  })
})
