import React from 'react'

export default function Project(props) {
    const {title, children, desc, link} = props
    return (
        <div className='Project'>
            {/* Title */}
            <h3>{title}</h3>
            {/* Image */}
            {children}
            {/* Description */}
            <p>{desc}</p>
            {/* Link */}
            <a href={link}>Live Demo!</a>
        </div>
    )
}