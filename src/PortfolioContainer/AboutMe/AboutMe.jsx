import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import "./AboutMe.css"

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id)
      return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hightlights: {
      bullets: [
        "Full Stack Web and Mobile Development",
        "Interactive Front-End as per the Design",
        "React and React Native",
        "Redux for state Management",
        "Building REST API",
        "Managing Databases"
      ],
      heading: "Here are a few Highlights:"
    }
  }

  const renderHighlight = () => {
    return (
      SCREEN_CONSTANTS.hightlights.bullets.map((value, i) => (
        <div className='highlight' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }

  return (
    // UI Part
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me ?'} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
            <div className='about-me-hightlights'>
              <div className='hightlight-heading'>
                <span>{SCREEN_CONSTANTS.hightlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn primary-btn'>Hire me</button>
              <a href='resume.pdf' download='fmoitry resume.pdf'>
                <button className='btn highlighted-btn btn' class='btn highlighted-btn btn'>Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
