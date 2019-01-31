import React from 'react'
import { Link } from 'gatsby'

export default function NavLink(props) { 
    return (
    <h1 style={{ margin: 0 }}>
      <Link
        to={props.to}
        className='Link' activeClassName=' isCurrent'
        // style={{
        //   color: `white`,
        //   textDecoration: `none`,
        // }}
      >
        {props.text}
      </Link>
    </h1>
    )
}
