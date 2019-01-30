import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SocialMediaLinks from './socialMediaLinks'

export default function Footer() {
    return (
        <footer className='Footer'>
            <StaticQuery
            // fixed(width: 80, height: 80) {
            query={graphql`
                query {
                    file: file(relativePath: { eq: "me.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 80) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            `}
            render={data => <Img fluid={data.file.childImageSharp.fluid} />}
            />
            <SocialMediaLinks/>
            <p className='credits'>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
      </footer>
    )
}
