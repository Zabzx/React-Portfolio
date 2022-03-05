import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Zabzx" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/ziabeher-phillips-722595227/" target='_blank'><BsLinkedin/></a>
        <a href="https://twitter.com/zabzDev" target='_blank'><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials