import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
import logo from '../assets/logo1.svg'
import logowhite from '../assets/logo2.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const links = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]


const Header = ({children}:React.PropsWithChildren) => {
  const { theme, setTheme } = useTheme()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
  <>
    {isDesktopOrLaptop && 
    <header className='grid grid-cols-3 p-4 space-x-4 sticky'>
     <div>
        {/* logo */}
      {/* write different logo for dark and light mode */}
     
      {theme === 'light' ? (
      <img src={logo} alt="logo" className='flex items-center font-bold brightness-200' width={120} height={48}/> ):(
      <img src={logowhite} alt="logowhite" className='flex items-center font-bold brightness-200' width={120} height={48}/> )}
     </div>
     
      {/* write the code to switch between headings projects , about , contact , skills? */}
    {/* write code for mobile view and desktop view */}
     
    <div className='flex justify-center items-center space-x-5 '>
      <Link className="navlink" to="projects" spy={true} smooth={true} offset={-70} duration={200}>
       Projects
         </Link>
      <Link className="navlink" to="about" spy={true} smooth={true} offset={-70} duration={200}>
       About
         </Link>
      <Link className="navlink" to="skills" spy={true} smooth={true} offset={-70} duration={200}>
      Skills
         </Link>
      <Link className="navlink" to="contact" spy={true} smooth={true} offset={-70} duration={200}>
       Contact
         </Link>
    </div>
    {/* {   (
    <div className='flex justify-end items-center '>
    <AiOutlineMenu className='w-8 h-8' />
     </div>)} */}
      {/* write the code to switch between dark and light mode */}
      <div className='flex justify-end items-center'>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='w-8 h-8 rounded'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <FaSun className='w-5 h-5' />
          ) : (
            <FaMoon className='w-5 h-5' />
          )}
        </button>
      </div>
      </header>}
    {isTabletOrMobile && 
    <header className='grid grid-cols-2 p-4 justify-between sticky'>
     <div>
        {/* logo */}
      {/* write different logo for dark and light mode */}
     
      {theme === 'light' ? (
      <img src={logo} alt="logo" className='flex items-center font-bold brightness-200' width={120} height={48}/> ):(
      <img src={logowhite} alt="logowhite" className='flex items-center font-bold brightness-200' width={120} height={48}/> )}
     </div>
     
      {/* write the code to switch between headings projects , about , contact , skills? */}
    {/* write code for mobile view and desktop view */}
     
    {/* <div className='flex justify-center items-center space-x-5 '>
        <button className='navlink'>Projects</button>
        <h1 className='navlink'>About</h1>
        <h1 className='navlink'>Contact</h1>
        <h1 className='navlink'>Skills</h1>
    </div> */}
      {/* write the code to switch between dark and light mode */}
      <div className='flex  items-center  space-x-4 justify-end'>
      <>
      <button onClick={onOpenModal}>
        <AiOutlineMenu className='w-8 h-8' />
         </button>
      <Modal  open={open} onClose={onCloseModal} center>
        <div className='flex flex-col w-full'>
      <Link className="navlink" to="contact" spy={true} smooth={true} offset={-70} duration={200}>
       Projects
         </Link>
      <Link className="navlink" to="contact" spy={true} smooth={true} offset={-70} duration={200}>
       About
         </Link>
      <Link className="navlink" to="contact" spy={true} smooth={true} offset={-70} duration={200}>
       Skills
         </Link>
      <Link className="navlink" to="contact" spy={true} smooth={true} offset={-70} duration={200}>
       Contact
         </Link>
         </div>
      </Modal>
    </>
        <button
          aria-label='Toggle Dark Mode'
          type='button'
          className='w-8 h-8 rounded'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <FaSun className='w-5 h-5' />
          ) : (
            <FaMoon className='w-5 h-5' />
          )}
        </button>
      </div>
      </header>}
      </>
      
  )
          }
  export default Header