import React from 'react'
import CV from '../../assets/Resume.pdf'
import './header.css'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn" download >Download Resume</a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA