import React from 'react'

export default function Project(props) {
    const {title, children, desc, liveLink, gitHubLink} = props
    return (
        <div className='Project'>
            {/* Title */}
            <h3>{title}</h3>
            {/* Image */}
            {children}
            {/* Description */}
            <p>{desc}</p>
            {/* Link */}
            <a rel='noopener noreferrer' target='_blank' href={liveLink}>Live Demo!</a>
            <a rel='noopener noreferrer' target='_blank' href={gitHubLink}>GitHub Repo!</a>
        </div>
    )
}