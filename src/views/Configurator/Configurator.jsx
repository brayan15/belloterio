import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'
import { setCalculatorInfo } from '../../actions/apiCall'

import './Configurator.scss'

class Configurator extends Component {
  constructor(props) {
    super(props)
    this.currencyFormat = this.currencyFormat.bind(this)
    this.estimatedAnualChange = this.estimatedAnualChange.bind(this)
    this.foodCostSavingChange = this.foodCostSavingChange.bind(this)
    this.state = {
      monthlySpending: 10,
      foodCostSaving: 0,
      fullTimeEmployees: 1,
      estimatedAnualSaving: 0
    }
  }

  componentDidMount() {
    this.props.setCalculatorInfo()
    const { monthlySpending, fullTimeEmployees } = this.state
    const foodCostSaving = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(monthlySpending * 0.3)
    const estimatedAnualSaving = new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(fullTimeEmployees * 1377 + monthlySpending * 0.3)
    this.setState({ ...this.state, foodCostSaving, estimatedAnualSaving })
  }

  currencyFormat(number) {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(number)
  }

  estimatedAnualChange(event, newValue) {
    const { monthlySpending } = this.state
    const estimateAnualSaving = newValue * 1377
    const foodSaving = monthlySpending * 0.3
    const format = this.currencyFormat(estimateAnualSaving + foodSaving)
    this.setState({ ...this.state, fullTimeEmployees: newValue, estimatedAnualSaving: format })
  }

  foodCostSavingChange(event, newValue) {
    const { fullTimeEmployees } = this.state
    const format = this.currencyFormat(newValue * 0.3)
    this.setState({ ...this.state, monthlySpending: newValue, foodCostSaving: format })
    this.estimatedAnualChange({}, fullTimeEmployees)
  }

  render() {
    const { monthlySpending, fullTimeEmployees, foodCostSaving, estimatedAnualSaving } = this.state
    const { configInfo } = this.props
    return (
      <Container maxWidth="lg" className="configurator-page">
        <div className="configurator-page__content">
          <Grid container>
            <Grid item xs={12} sm={5} md={4} className="col-left">
              <h2 className="configurator-page__title">{configInfo.title}</h2>
              <p className="configurator-page__description">{configInfo.description}</p>
            </Grid>
            <Grid item xs={12} sm={7} md={8} className="col-right">
              <div className="right-content">
                <Grid container className="range-slider">
                  <Grid item xs={6} sm={5} md={8} lg={9}>
                    <div className="range-slider__title-content">
                      <h4 className="range-slider__title">Monthly</h4>
                      <h4 className="range-slider__title">ingredient spending</h4>
                    </div>
                  </Grid>
                  <Grid item xs={6} sm={7} md={4} lg={3}>
                    <div className="range-slider__value justify-content-s-b">
                      <p className="range-slider__coin">$</p>
                      <p className="range-slider__text">{monthlySpending}.00</p>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      value={monthlySpending}
                      min={10}
                      track="normal"
                      max={100}
                      aria-labelledby="continuous-slider"
                      onChange={this.foodCostSavingChange}
                      classes={{
                        root: 'root-slide',
                        colorPrimary: 'primary-color-slide',
                        rail: 'rail-slide',
                        track: 'track-slide',
                        thumb: 'thumb-slide',
                        active: 'slide-active'
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container className="range-slider slider-two">
                  <Grid item xs={8} md={10}>
                    <div className="range-slider__title-content">
                      <h4 className="range-slider__title">Full-time employees that</h4>
                      <h4 className="range-slider__title">process invoices</h4>
                    </div>
                  </Grid>
                  <Grid item xs={4} md={2}>
                    <div className="range-slider__value justify-content-f-e">
                      <p className="range-slider__text">{fullTimeEmployees}</p>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Slider
                      value={fullTimeEmployees}
                      min={1}
                      track="normal"
                      max={10}
                      aria-labelledby="continuous-slider"
                      onChange={this.estimatedAnualChange}
                      classes={{
                        root: 'root-slide',
                        colorPrimary: 'primary-color-slide',
                        rail: 'rail-slide',
                        track: 'track-slide',
                        thumb: 'thumb-slide',
                        active: 'slide-active'
                      }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
          <div className="range-estimate">
            <div className="range-estimate__content">
              <div className="range-estimate__price">
                <h4>{foodCostSaving}</h4>
              </div>
              <h4 className="range-estimate__title">Estimated cost food savings</h4>
            </div>
            <div className="range-estimate__content">
              <div className="range-estimate__price">
                <h4>{estimatedAnualSaving}</h4>
              </div>
              <h4 className="range-estimate__title">Your estimated annual savings</h4>
            </div>
          </div>
        </div>
      </Container>
    )
  }
}

Configurator.propTypes = {
  setCalculatorInfo: PropTypes.func.isRequired,
  configInfo: PropTypes.shape({})
}

Configurator.defaultProps = {
  configInfo: {}
}

const mapStateToProps = ({ Belloterio }) => ({
  configInfo: Belloterio.configInfo
})

export default connect(
  mapStateToProps,
  { setCalculatorInfo }
)(Configurator)
