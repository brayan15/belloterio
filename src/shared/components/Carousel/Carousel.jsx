import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Carousel.scss'

const CustomCarousel = ({ reviews }) => (
  // eslint-disable-next-line react/jsx-boolean-value
  <Carousel showThumbs={false} infiniteLoop={true} showIndicators={false}>
    {reviews.map(review => (
      <div key={review.name} className="slide-content">
        <div className="slide-content__name">
          <h3 className="title">{review.name}</h3>
          <p className="position">{review.position}</p>
        </div>
        <div className="slide-content__comment">
          <p>&quot;{review.comment}&quot;</p>
        </div>
      </div>
    ))}
  </Carousel>
)

CustomCarousel.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default CustomCarousel
