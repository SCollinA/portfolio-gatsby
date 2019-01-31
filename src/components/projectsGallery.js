import React from 'react'
import Img from 'gatsby-image'

import ProjectSample from './projectSample'

export default function ProjectsGallery({images}) {
    return (
        <div className='ProjectsGallery'>
            <a href='/TaskMagic'>
                <ProjectSample 
                title='Task Magic'
                descShort='Focus on priorities'
                >
                    <Img fluid={images[0].childImageSharp.fluid}/>
                </ProjectSample>
            </a>
            <a href='/TeeTimes'>
                <ProjectSample 
                title='Tee Times'
                descShort='Make and change tee times with friends'
                >
                    <Img fluid={images[1].childImageSharp.fluid}/>
                </ProjectSample>
            </a>    
            <a href='/FFSchedules'>
                <ProjectSample 
                title='Fantasy Football Scheduler'
                descShort='Realistic fantasy football schedules'
                >
                    <Img fluid={images[2].childImageSharp.fluid}/>
                </ProjectSample>
            </a>
            <a href='/SpaceOut'>
                <ProjectSample 
                title='Space Out'
                descShort='Look at the stars'
                >
                    <Img fluid={images[3].childImageSharp.fluid}/>
                </ProjectSample>
            </a>
        </div>
    )
}