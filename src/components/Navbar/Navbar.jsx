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
        <a href="https://www.linkedin.com/in/kshitij-m-10779511b/"
         title='LinkedIn'
         target='_blank'
         rel='noopener noreferrer'
         aria-label='LinkedIn'>
          <FaLinkedin className='text-white hover:text-sky-700 transition-all duration-300'/></a>
        <a href="https://www.instagram.com/__the_kshitij/"
         title='Instagram'
         target='_blank'
         rel='noopener noreferrer'
         aria-label='Instagram'>
          <FaInstagram className='text-white hover:text-sky-700 transition-all duration-300'/></a>
        <a href="https://github.com/kshitijMandave"
         title='Github'
         target='_blank'
         rel='noopener noreferrer'
         aria-label='Github'>
          <FaGithub className='text-white hover:text-sky-700 transition-all duration-300'/></a>
        <a href="https://x.com/_the_kshitij"
         title='XTwitter'
         target='_blank'
         rel='noopener noreferrer'
         aria-label='XTwitter'>
          <FaSquareXTwitter className='text-white hover:text-sky-700 transition-all duration-300'/></a>
      </div>
    </nav>
  )
}
