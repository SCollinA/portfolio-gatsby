import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'gatsby-image'

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
    <h1 style={{ margin: 0 }}>
      <NavLink
        to="/"
        // style={{
        //   color: `white`,
        //   textDecoration: `none`,
        // }}
      >
        {siteTitle}
      </NavLink>
    </h1>
    <h1 style={{ margin: 0 }}>
      <NavLink 
        to="/page-2/"
        // style={{
        //   color: `white`,
        //   textDecoration: `none`,
        // }}
        >
          {'Go to page 2'}
        </NavLink>
    </h1>
    <StaticQuery
      query={graphql`
        query {
          file: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Img fixed={data.file.childImageSharp.fixed} />}
    />
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
