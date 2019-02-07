import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialMediaLinks(props) {
    return (
        <div className='SocialMediaLinks'>
            <a rel='noopener noreferrer' target='_blank' href='https://www.linkedin.com/in/scollinargo/'>
                <FontAwesomeIcon size='2x' icon={['fab', 'linkedin']}/>
            </a>
            <a rel='noopener noreferrer' target='_blank' href='https://twitter.com/SCollinArgo'>
                <FontAwesomeIcon size='2x' icon={['fab', 'twitter']}/>
            </a>
            <a rel='noopener noreferrer' target='_blank' href='https://github.com/SCollinA'>
                <FontAwesomeIcon size='2x' icon={['fab', 'github']}/>
            </a>
        </div>
    )
}