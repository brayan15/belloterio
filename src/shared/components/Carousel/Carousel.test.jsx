import React from 'react'
import CustomCarousel from './Carousel'

describe('<CustomCarousel />', () => {
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

  describe('CustomCarousel', () => {
    beforeEach(() => {
      wrapper = mount(<CustomCarousel {...defaultProps} />)
    })

    it('Should render with defaults props and items on slide', () => {
      const content = wrapper.find('Carousel')
      const slide = wrapper.find('.slide-content')
      expect(slide).toHaveLength(4)
      expect(content.exists()).toBe(true)
    })
  })
})
