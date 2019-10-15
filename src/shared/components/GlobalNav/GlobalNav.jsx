import React from 'react'
// import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import logo from '../../../statics/images/bellotero.png'

import './GlobalNav.scss'

function GlobalNav() {
  return (
    <div className="nav-bar">
      <Container maxWidth="lg" className="h-100">
        <nav className="nav-bar__nav h-100">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <ul className="nav-bar__list">
            <li className="nav-bar__item">
              <NavLink to="#" className="nav-bar__link">
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default GlobalNav
