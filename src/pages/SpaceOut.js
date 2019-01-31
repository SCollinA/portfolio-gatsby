import React from 'react'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectDiv from '../components/projectDiv'

const SpaceOut = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <ProjectDiv
      title='Space Out'
      desc='An app built by Evan and Collin'
      link='https://teetimes.collinargo.com'
    >
      <Img fluid={data.image1.childImageSharp.fluid}/>
    </ProjectDiv>
  </Layout>
)

export default SpaceOut

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