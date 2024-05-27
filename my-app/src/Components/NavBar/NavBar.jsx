import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import ShivamLogo from '../../assets/ShivamLogo.jpg'
const NavBar = () => {
  return (
    <nav className=' mb-20 flex flex items-center justify-between py-6'>
       <div class="flex flex-shrink-0 items-center w-24 h-24 rounded-full overflow-hidden">
        <img src={ShivamLogo} alt="logo" className ="mx-2 w-10   "/>
    </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/yadavshivam0408/" target="_blank">
          <FaLinkedin/>
        </a>
        
        <a href="https://github.com/Feradicator" target="_blank">
                <FaGithub className="text-white text-4xl" />
              </a>
              <a href="https://www.instagram.com/imshivam_y?igsh=MWtlbnZmczNzNzBqNw==" target="_blank">
              <FaInstagram/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100006868120270&sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank">
                <FaFacebook/>
              </a>
        
      </div>
    </nav>
  )
}

export default NavBar
