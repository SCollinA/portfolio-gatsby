import React from 'react'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

const SpaceOut = ({data}) => (
  <Layout>
    <SEO title="Space Out" />
    <Project
      title='Space Out'
      desc='This app uses a simple API called "lookup" to get info on space object locations which can then be used to determine visibility.'
      link='https://myspaceapp.collinargo.com'
    >
      <Img fluid={data.image4.childImageSharp.fluid}/>
    </Project>
  </Layout>
)

export default SpaceOut

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