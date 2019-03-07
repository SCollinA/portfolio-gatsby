import React from 'react'

export default function Project(props) {
    const {title, children, desc, liveLink, gitHubLink} = props
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
                {liveLink && <a rel='noopener noreferrer' target='_blank' href={liveLink}>Live Demo!</a>}
                <a rel='noopener noreferrer' target='_blank' href={gitHubLink}>GitHub Repo!</a>
            </div>
        </div>
    )
}