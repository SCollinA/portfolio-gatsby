import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroDiv from '../components/heroDiv'
import ProjectsGallery from '../components/projectsGallery'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faTwitter, faGithub)

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroDiv />
    <ProjectsGallery images={[data.image1, data.image2, data.image3, data.image4]}/>
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
          image1: file(relativePath: { eq: "task_magic_icon.png" }) {
            ...fluidImage
          }

          image2: file(relativePath: { eq: "tee_hole.png" }) {
            ...fluidImage
          }
          
          image3: file(relativePath: { eq: "Sample824.png" }) {
            ...fluidImage
          }
          
          image4: file(relativePath: { eq: "CaveNebula.jpg" }) {
            ...fluidImage
          }
      }
  `
}