import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
    <img src={about_img} alt="" className='about-img'/>
    <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>

      </div>
      <div className="about-right">
    <h3>who we are & what we stand for</h3>
    <h2>Connect | Earn | Trust

</h2>
    <p>At Leeds Pulse, we empower professionals to turn their LinkedIn presence into a secure source of passive income. Our platform bridges the gap between account holders and trusted businesses seeking outreach opportunities.

</p>
    <p>We operate with integrity, transparency, and full respect for your data and privacy.

</p>
    <p> From onboarding to payment, our process is simple, secure, and designed to put your peace of mind first.</p>
      </div>
    </div>
  )
}
export default About
