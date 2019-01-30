import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faTwitter, faGithub)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ minWidth: `20%`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
