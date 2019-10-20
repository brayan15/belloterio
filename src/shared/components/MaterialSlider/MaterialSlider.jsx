import React from 'react'
import PropTypes from 'prop-types'
import Slider from '@material-ui/core/Slider'

import './MaterialSlider.scss'

const MaterialSlider = ({ minValue, maxValue, value, onChange }) => (
  <Slider
    value={value}
    min={minValue}
    max={maxValue}
    track="normal"
    aria-labelledby="continuous-slider"
    onChange={onChange}
    classes={{
      root: 'root-slide',
      colorPrimary: 'primary-color-slide',
      rail: 'rail-slide',
      track: 'track-slide',
      thumb: 'thumb-slide',
      active: 'slide-active'
    }}
  />
)

MaterialSlider.propTypes = {
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MaterialSlider
