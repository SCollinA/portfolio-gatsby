import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ProjectDiv from '../components/projectDiv'

export default function ProjectsDiv({images}) {
    return (
        <div className='ProjectsDiv'>
            <ProjectDiv 
            title='Tee Times'
            desc='An app built by Evan and Collin'
            link='https://teetimes.collinargo.com'
            >
                <Img fluid={images[0].childImageSharp.fluid}/>
            </ProjectDiv>
        </div>
    )
}


// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const query = () => {
//   return graphql`
//       query {
//           image1: file(relativePath: { eq: "../images/me.jpg" }) {
//             ...fluidImage
//           }

//           image2: file(relativePath: { eq: "../images/me.jpg" }) {
//             ...fluidImage
//           }
//       }
//   `
// }