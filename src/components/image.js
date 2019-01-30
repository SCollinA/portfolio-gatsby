// import React from 'react'
// import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `StaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.app/gatsby-image
//  * - `StaticQuery`: https://gatsby.app/staticquery
//  */

// export default ({ data }) => (
//   <div className='Image'>
//     <Img fluid={data.image.file.childImageSharp.fluid} />
//   </div>
// )

// export const fluidImage = graphql`
//   fragment fluidImage on File {
//     childImageSharp {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// `

// export const query = (path) => {
//   return graphql`
//       query {
//           image: file(relativePath: { eq: "../images/me.jpg" }) {
//               ...fluidImage
//           }
//       }
//   `
// }