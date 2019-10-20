import React from 'react'
import storeInit from '../../../__mocks__/store'
import ConfiguratorContainer, { Configurator } from './Configurator'

describe('<Configurator />', () => {
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
    configInfo: {
      title: 'Save more with Bellotero.io',
      description:
        'With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.'
    },
    setCalculatorInfo: jest.fn()
  }

  describe('ConfiguratorContainer', () => {
    beforeEach(() => {
      const initialState = {
        Belloterio: {
          configInfo: {}
        }
      }
      const store = storeInit(initialState)
      wrapper = shallow(<ConfiguratorContainer store={store} />)
    })

    it('should run ConfiguratorContainer component with store', () => {
      const { children } = wrapper.props()

      expect(children.props.configInfo).toEqual({})
    })
  })

  describe('Configurator', () => {
    beforeEach(() => {
      wrapper = shallow(<Configurator {...defaultProps} />, { disableLifecycleMethods: false })
    })

    it('Should render with defaults props', () => {
      const content = wrapper.find('.configurator-page__content')
      const title = wrapper.find('.configurator-page__title')

      expect(content.exists()).toBe(true)
      expect(title.text()).toEqual(defaultProps.configInfo.title)
      expect(defaultProps.setCalculatorInfo).toHaveBeenCalled()
    })

    it('Should update state when foodCostSavingChange is changed', () => {
      const slider = wrapper.find('MaterialSlider').first()
      slider.props().onChange({}, 50)

      expect(wrapper.state('monthlySpending')).toEqual(50)
      expect(wrapper.state('foodCostSaving')).toEqual('US$ 15.00')
      expect(wrapper.state('estimatedAnualSaving')).toEqual('US$ 1,392.00')
    })
  })
})
