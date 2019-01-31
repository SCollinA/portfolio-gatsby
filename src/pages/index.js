import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroDiv from '../components/heroDiv'
import ProjectsDiv from '../components/projectsDiv'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faTwitter, faGithub)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroDiv />
    <ProjectsDiv images={[data.image1, data.image2, data.image3]}/>
  </Layout>
)

export default IndexPage


export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = () => {
  return graphql`
      query {
          image1: file(relativePath: { eq: "me.jpg" }) {
            ...fluidImage
          }

          image2: file(relativePath: { eq: "me.jpg" }) {
            ...fluidImage
          }
          
          image3: file(relativePath: { eq: "me.jpg" }) {
            ...fluidImage
          }
      }
  `
}