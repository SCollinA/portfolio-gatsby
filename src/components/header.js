import PropTypes from 'prop-types'
import React from 'react'

import NavLink from './navLink'

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <NavLink to='/' text='Home'/>
    <NavLink to='/TaskMagic' text='Task Magic'/>
    <NavLink to='/TeeTimes' text='Tee Times'/>
    <NavLink to='/FFScheduler' text='FFScheduler'/>
    <NavLink to='/SpaceOut' text='Space Out'/>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
