import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" />
        </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Over 1 year Developing</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Real World Projects completed</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>I'm a Front End Web Developer based in the Caribbean. I value high quality and meaningful development. My goal is to be part of projects that will satisfy the user, that will help me grow as a developer and to satisfy my itch of overcoming challenging development problems. I love to learn, seriously, I spent over a year self learning programming and built numerous projects on my own. Learning UI / UX development, best practices and debugging. There is nothing more satisfying than overcoming a challenging problem and feeling the instant growth you gain from it. Being a developer is me being in my comfort zone and I wouldn't want it any other way. By the end of 2022, I will be a full stack developer and aiming to improve my tech stack even further, I'm just getting started :)</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div> 
    </section>
  )
}

export default About