import React from 'react'
import { graphql } from 'gatsby'

export default function Project({title, children, desc, liveLink, gitHubLink, data}) {
    console.log(data)
    const { markdownRemark } = data // data.markdownRemark holds our post data
    const { frontmatter, html } = markdownRemark
    return (
        <div className='Project'>
            {/* Title */}
            <h3>{title}</h3>
            <div className='projectContents'>
                {/* Image */}
                {/* {children} */}
                {/* Description */}
                {/* <p>{desc}</p> */}
                <h1>{frontmatter.title}</h1>
                <h2>{frontmatter.date}</h2>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
                />
            </div>
            <div className='projectLinks'>
                {/* Link */}
                <a rel='noopener noreferrer' target='_blank' href={liveLink}>Live Demo!</a>
                <a rel='noopener noreferrer' target='_blank' href={gitHubLink}>GitHub Repo!</a>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`