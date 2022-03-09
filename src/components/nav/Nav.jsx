import React from 'react'
import { useState } from 'react'
import './nav.css'
import {FiHome} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {AiFillFolderOpen} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillFolderOpen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage/></a>
      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><AiOutlineArrowDown/></a>
    </nav>
  )
}

export default Nav