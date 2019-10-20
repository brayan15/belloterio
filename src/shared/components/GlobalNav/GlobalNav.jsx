import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { setNavItems } from '../../../actions/apiCall'

import logo from '../../../statics/images/bellotero.png'
import './GlobalNav.scss'

export class GlobalNav extends Component {
  componentDidMount() {
    this.props.setNavItems()
  }

  render() {
    const { navItems } = this.props
    return (
      <div className="nav-bar">
        <Container maxWidth="lg" className="h-100">
          <nav className="nav-bar__nav h-100">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <ul className="nav-bar__list">
              {navItems &&
                navItems.map(({ text, route }) => (
                  <li className="nav-bar__item" key={text}>
                    <NavLink exact to={route} className="nav-bar__link">
                      {text}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </nav>
        </Container>
      </div>
    )
  }
}

GlobalNav.propTypes = {
  setNavItems: PropTypes.func.isRequired,
  navItems: PropTypes.arrayOf(PropTypes.shape({}))
}

GlobalNav.defaultProps = {
  navItems: []
}

const mapStateToProps = ({ Belloterio }) => ({
  navItems: Belloterio.navItems
})

export default connect(
  mapStateToProps,
  { setNavItems }
)(GlobalNav)
