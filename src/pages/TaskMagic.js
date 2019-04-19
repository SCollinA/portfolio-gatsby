import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'

const TaskMagic = ({data}) => (
  <Layout>
    <SEO title="Task Magic" />
    <Project
      title='Task Magic'
      desc='This app was originally written for iOS, then migrated to a PERN stack. Its a todo app with nested todos ordered by priority.'
      // liveLink='https://taskmagic.app'
      gitHubLink='https://github.com/SCollinA/task-magic'
    >
      <Img fluid={data.image1.childImageSharp.fluid}/>
    </Project>
  </Layout>
)

export default TaskMagic

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