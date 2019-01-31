import React from 'react'

export default function Project(props) {
    const {title, children, descShort, descLong, link} = props
    return (
        <div className='Project'>
            {/* Title */}
            <h3>{title}</h3>
            {/* Image */}
            {children}
            {/* Description */}
            <p>{descLong || descShort}</p>
            {/* Link */}
            <a href={link}>Live Demo!</a>
        </div>
    )
}