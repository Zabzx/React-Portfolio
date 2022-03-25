import React from 'react'
import './portfolio.css'
import MYTOURNI from '../../assets/mytourni_thumbnail.jpg'
import FLOWW from '../../assets/flow_thumbnail.jpg'
import CLOUDTECH from '../../assets/cloudtech-thumbnail.jpg'
import SPICE from '../../assets/spice_thumbnail.jpg'
import DATE from '../../assets/date_thumbnail.jpg'

const portfolioItems = [
  {
    id: 2,
    image: FLOWW,
    title: 'Floww',
    github: 'https://github.com/Zabzx/Floww',
    link: 'https://flowwd.netlify.app/'
  },
  {
    id: 3,
    image: CLOUDTECH,
    title: 'CloudTech',
    github: 'https://github.com/Zabzx/Static',
    link: 'https://cloudtechh.netlify.app/'
  },
  {
    id: 1,
    image: MYTOURNI,
    title: 'MyTourni',
    github: 'https://github.com/Zabzx/tourni',
    link: 'http://mytourni.com/'
  },
  {
    id: 5,
    image: SPICE,
    title: 'SpiceUp!',
    github: 'https://github.com/Zabzx/spiceUp',
    link: 'https://spiced-up.netlify.app/'
  },
  {
    id: 4,
    image: DATE,
    title: 'Live Date Countdown',
    github: 'https://github.com/Zabzx/Live-Countdown',
    link: 'https://mytourni.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolioItems.map(({id, image, title, github, link}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
              <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn-pf" target="_blank">GitHub</a>
              <a href={link} className="btn-pf2" target="_blank">Link to App</a>
              </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio