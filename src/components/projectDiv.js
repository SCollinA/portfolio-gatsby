import React from 'react'

export default function ProjectDiv(props) {
    const {title, children, desc, link} = props
    return (
        <div className='ProjectDiv'
            style={{
                backgroundColor: `lightcoral`,
            }}
        >
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