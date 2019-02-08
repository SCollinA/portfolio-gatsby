import React from 'react'
import { graphql } from 'gatsby'

export default function Project({title, children, desc, liveLink, gitHubLink, data}) {
    return (
        <div className='Project'>
            {/* Title */}
            <h3>{title}</h3>
            <div className='projectContents'>
                {/* Image */}
                {children}
                {/* Description */}
                <p>{desc}</p>
            </div>
            <div className='projectLinks'>
                {/* Link */}
                <a rel='noopener noreferrer' target='_blank' href={liveLink}>Live Demo!</a>
                <a rel='noopener noreferrer' target='_blank' href={gitHubLink}>GitHub Repo!</a>
            </div>
        </div>
    )
}