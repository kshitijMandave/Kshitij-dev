import React from 'react'
import logo from '../../images/Logo.png'
import { FaGithub, FaInstagram   } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label='Home'>
          <img src={logo} width={50} height={33} alt="" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/kshitij-m-10779511b/"><FaLinkedin/></a>
        <a href="https://www.instagram.com/__the_kshitij/"><FaInstagram/></a>
        <a href="https://github.com/kshitijMandave"><FaGithub/></a>
        <a href="https://x.com/_the_kshitij"><FaSquareXTwitter/></a>

      </div>
    </nav>
  )
}
