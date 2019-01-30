import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faTwitter, faGithub)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className='heroImage'>
      <h3>welcome to Collin's portfolio</h3>
    </div>
    <div className='heroImage'>
      <h3>welcome to Collin's portfolio</h3>
    </div>
  </Layout>
)

export default IndexPage
