import React from 'react'

export default function ProjectSample(props) {
    const {title, children, descShort, descLong, link} = props
    return (
        <div className='ProjectSample'>
            {/* Title */}
            <h3>{title}</h3>
            {/* Image */}
            {children}
            {/* Description */}
            <p>{descLong || descShort}</p>
            {/* Link */}
            {!descShort && <a href={link}>Live Demo!</a>}
        </div>
    )
}