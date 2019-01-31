import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

// import NavLink from './navLink'
import SocialMediaLinks from './socialMediaLinks';

const Header = ({ siteTitle }) => (
  <div
  className='Header'
    style={{
      // background: `rebeccapurple`,
      // marginBottom: `1.45rem`,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        className='Link' activeClassName=' isCurrent'
        // style={{
        //   color: `white`,
        //   textDecoration: `none`,
        // }}
      >
        {'Home'}
      </Link>
    </h1>
    <h1 style={{ margin: 0 }}>
      <Link 
        to="/TeeTimes/"
        className='Link' activeClassName=' isCurrent'
        // style={{
        //   color: `white`,
        //   textDecoration: `none`,
        // }}
        >
          {'Tee Times'}
        </Link>
    </h1>
    <h1 style={{ margin: 0 }}>
      <Link 
        to="/SpaceOut"
        className='Link' activeClassName=' isCurrent'
        // style={{
        //   color: `white`,
        //   textDecoration: `none`,
        // }}
        >
          {'Space Out'}
        </Link>
    </h1>
    <SocialMediaLinks/>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
