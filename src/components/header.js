import PropTypes from 'prop-types'
import React from 'react'

import NavLink from './navLink'

const Header = ({ siteTitle }) => (
  <div
    className='Header'
    style={{
      // background: `rebeccapurple`,
      // marginBottom: `1.45rem`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <NavLink to='/' text='Home'/>
    <NavLink to='/TaskMagic' text='Task Magic'/>
    <NavLink to='/TeeTimes' text='TeeTimes'/>
    <NavLink to='/FFScheduler' text='FFScheduler'/>
    <NavLink to='/SpaceOut' text='SpaceOut'/>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
