import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__development">
          <h3>Development Laguages / Frameworks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>HTML</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>CSS</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Tailwind CSS</h4>
              <small className="text-dark">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>React JS</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Elixir</h4>
              <small className="text-dark">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>C#</h4>
              <small className="text-dark">Beginner</small>
              </div>
            </article>
          </div>
        </div>
         {/* Tools */}

        <div className="experience__tools">
        <div className="experience__development">
          <h3>Development Tools / Services</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Git</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>GitHub</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Netlify</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Figma</h4>
              <small className="text-dark">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Adobe XD</h4>
              <small className="text-dark">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>NPM</h4>
              <small className="text-dark">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill/>
              <div>
              <h4>Ubuntu</h4>
              <small className="text-dark">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Experience