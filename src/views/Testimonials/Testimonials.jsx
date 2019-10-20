import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import { setHomeInfo } from '../../actions/apiCall'
import CustomCarousel from '../../shared/components/Carousel'

import './Testimonials.scss'

export class Testimonials extends Component {
  componentDidMount() {
    this.props.setHomeInfo()
  }

  render() {
    const { homeInfo } = this.props
    const { title } = homeInfo
    return (
      <Container maxWidth="lg" className="testimonials-page">
        <div className="testimonials-page__content">
          <h1 className="testimonials-page__title">{title}</h1>
          {homeInfo.reviews && <CustomCarousel reviews={homeInfo.reviews} />}
        </div>
      </Container>
    )
  }
}

Testimonials.propTypes = {
  setHomeInfo: PropTypes.func.isRequired,
  homeInfo: PropTypes.shape({})
}

Testimonials.defaultProps = {
  homeInfo: {}
}

const mapStateToProps = ({ Belloterio }) => ({
  homeInfo: Belloterio.homeInfo
})

export default connect(
  mapStateToProps,
  { setHomeInfo }
)(Testimonials)
