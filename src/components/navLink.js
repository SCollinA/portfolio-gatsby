import React from 'react'
import { Link } from 'gatsby'

export default function NavLink(props) { 
    return (
        <Link 
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            return {
                className: `NavLink${isCurrent ? ` isCurrent` : ``}`,
                style: {
                    color: isCurrent ? "lightsalmon" : "deepskyblue"
                }
            };
        }}
        />
    )
}
