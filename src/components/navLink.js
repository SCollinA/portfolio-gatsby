import React from 'react'
import { Link } from 'gatsby'

export default function NavLink(props) { 
    return (
      <Link to={props.to}
        className='NavLink' activeClassName=' isCurrent'
      >
        <h1>{props.text}</h1>
      </Link>
    )
}
