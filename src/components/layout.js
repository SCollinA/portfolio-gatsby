import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className='Layout'>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='Content'
          // style={{
          //   height: '100%',
          //   // margin: `0 auto`,
          //   // maxWidth: 960,
          //   // padding: `0px 1.0875rem 1.45rem`,
          //   // paddingTop: 0,
          // }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
