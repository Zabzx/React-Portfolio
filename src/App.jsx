import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testemonials from './components/testemonials/Testemonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Testemonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App