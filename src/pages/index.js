import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroDiv from '../components/heroDiv'
import ProjectsDiv from '../components/projectsDiv'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faTwitter, faGithub)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroDiv />
    <ProjectsDiv />
  </Layout>
)

export default IndexPage
