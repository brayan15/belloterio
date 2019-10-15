import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { getNavItems } from '../../../actions/apiCall'

import logo from '../../../statics/images/bellotero.png'
import './GlobalNav.scss'

class GlobalNav extends Component {
  componentDidMount() {
    const { setNavItems } = this.props
    setNavItems()
  }

  render() {
    return (
      <div className="nav-bar">
        <Container maxWidth="lg" className="h-100">
          <nav className="nav-bar__nav h-100">
            <a href="/" className="logo">
              <img src={logo} alt="logo" />
            </a>
            <ul className="nav-bar__list">
              {this.props.navItems &&
                this.props.navItems.map(({ text, route }) => (
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
  setNavItems: PropTypes.func,
  navItems: PropTypes.arrayOf(PropTypes.shape({}))
}

GlobalNav.defaultProps = {
  setNavItems: () => null,
  navItems: []
}

const mapStateToProps = ({ Bellotorio }) => ({
  navItems: Bellotorio.navItems
})

const mapDispatchToProps = dispatch => ({ setNavItems: () => dispatch(getNavItems()) })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GlobalNav)
