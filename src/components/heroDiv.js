import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function HeroDiv() {
    return (
        <div className='heroDiv'>
            <div className='heroTitle'>
                <h3>welcome to Collin's portfolio</h3>
                <h3>welcome to Collin's portfolio</h3>
                <h3>welcome to Collin's portfolio</h3>
                <h3>welcome to Collin's portfolio</h3>
                <h3>welcome to Collin's portfolio</h3>
            </div>
            <div className='heroImage'>
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
      </div>
    )
}
