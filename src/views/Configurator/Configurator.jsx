import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Slider from '@material-ui/core/Slider'

import './Configurator.scss'

function Configurator() {
  const [monthlySpending, setMonthlySpending] = useState(10)
  const [foodCostSaving, setFoodCostSaving] = useState(new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(monthlySpending * 0.3))
  const [fullTimeEmployees, setFullTimeEmployees] = useState(1)
  const [estimatedAnualSaving, setEstimatedAnualSaving] = useState(
    new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(fullTimeEmployees * 1377 + monthlySpending * 0.3)
  )

  function currencyFormat(number) {
    return new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(number)
  }

  function estimatedAnualChange(event, newValue) {
    setFullTimeEmployees(newValue)
    const estimateAnualSaving = fullTimeEmployees * 1377
    const foodSaving = monthlySpending * 0.3
    const format = currencyFormat(estimateAnualSaving + foodSaving)
    setEstimatedAnualSaving(format)
  }

  function foodCostSavingChange(event, newValue) {
    setMonthlySpending(newValue)
    const value = currencyFormat(monthlySpending * 0.3)
    setFoodCostSaving(value)
    estimatedAnualChange({}, fullTimeEmployees)
  }

  return (
    <Container maxWidth="lg" className="configurator-page">
      <div className="configurator-page__content">
        <Grid container>
          <Grid item xs={12} sm={5} md={4} className="col-left">
            <h2 className="configurator-page__title">Save more with</h2>
            <br />
            <h2 className="configurator-page__title">Bellotero.io</h2>
            <p className="configurator-page__description">
              With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on
              bookkeeping and no need to worry about safety.{' '}
            </p>
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
                    onChange={foodCostSavingChange}
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
                    onChange={estimatedAnualChange}
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

export default Configurator
