import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import heroVideo from '../../assets/herobg.mp4' // Your video file name

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Background video */}
      <video className="hero-bg" autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-text">
        </div>
    </div>
  )
}

export default Hero
