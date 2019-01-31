import React from 'react'
// import { Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

const TeeTimes = ({data}) => (
  <Layout>
    <SEO title="Tee Times" />
    <Project
      title='Tee Times'
      desc='This app was built for use at a country club by members and staff to make and change tee time reservations.'
      link='https://teetimes.collinargo.com'
    >
      <Img fluid={data.image2.childImageSharp.fluid}/>
    </Project>
  </Layout>
)

export default TeeTimes

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