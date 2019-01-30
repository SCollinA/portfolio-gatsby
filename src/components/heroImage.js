import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialMediaLinks from './socialMediaLinks'

export default function Footer() {
    return (
        <div className='heroImage'>
            <div className='heroTitle'>
                <h3>welcome to Collin's portfolio</h3>
            </div>
            <StaticQuery
                // fixed(width: 80, height: 80) {
                query={graphql`
                    query {
                        file: file(relativePath: { eq: "me.jpg" }) {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                `}
                render={data => <Img fluid={data.file.childImageSharp.fluid} />}
            />
      </div>
    )
}
