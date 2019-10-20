import React from 'react'
import MaterialSlider from './MaterialSlider'

describe('<MaterialSlider />', () => {
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
    minValue: 10,
    maxValue: 100,
    value: 50,
    onChange: jest.fn()
  }

  describe('MaterialSlider', () => {
    beforeEach(() => {
      wrapper = shallow(<MaterialSlider {...defaultProps} />)
    })

    it('Should render with defaults props', () => {
      const value = wrapper.prop('value')
      const minValue = wrapper.prop('min')
      const maxValue = wrapper.prop('max')

      expect(value).toEqual(defaultProps.value)
      expect(minValue).toEqual(defaultProps.minValue)
      expect(maxValue).toEqual(defaultProps.maxValue)
    })
  })
})
