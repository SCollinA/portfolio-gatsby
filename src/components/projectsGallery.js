import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Project from './project'

export default function ProjectsGallery({images}) {
    return (
        <div className='ProjectsGallery'>
            <a href='/TaskMagic'>
                <Project 
                title='Task Magic'
                descShort='An app built by Evan and Collin'
                link='https://teetimes.collinargo.com'
                >
                    <Img fluid={images[0].childImageSharp.fluid}/>
                </Project>
            </a>
            <a href='/TeeTimes'>
                <Project 
                title='Tee Times'
                descShort='An app built by Evan and Collin'
                link='https://teetimes.collinargo.com'
                >
                    <Img fluid={images[0].childImageSharp.fluid}/>
                </Project>
            </a>    
            <a href='/FFSchedules'>
                <Project 
                title='Fantasy Football Scheduler'
                descShort='An app built by Evan and Collin'
                link='https://teetimes.collinargo.com'
                >
                    <Img fluid={images[0].childImageSharp.fluid}/>
                </Project>
            </a>
            <a href='/SpaceOut'>
                <Project 
                title='Space Out'
                descShort='An app built by Evan and Collin'
                link='https://teetimes.collinargo.com'
                >
                    <Img fluid={images[0].childImageSharp.fluid}/>
                </Project>
            </a>
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