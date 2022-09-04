import React, { Fragment } from 'react'
import { background1w } from '../assets'
const Navbar = () => {
    const backgroundImageStyle = {
        backgroundImage : `url("${background1w}")`,
        backgroundSize : 'cover',
        backgroundPosition : 'center'
      }
  return (
    <Fragment>
        <nav className='text-[24px] font-medium  ss:flex hidden '>
            <ul className='flex justify-evenly w-[800px] text-white'>
                <li><a>About me</a></li>
                <li><a>Services</a></li>
                <li><a>Projects</a></li>
                <li><a>Content</a></li>
                <li><a>Contact me</a></li>
            </ul>
        </nav>
        <nav style={backgroundImageStyle} className='fixed bottom-[50px] mx-[10%] z-50 left-0 text-[16px] ss:hidden flex font-medium rounded-[20px]'>
            <ul  className='p-[10px] flex justify-evenly w-[300px]  backdrop-blur-[2px]  text-black rounded-[20px]'>
                <li><a>Services</a></li>
                <li><a>Projects</a></li>
                <li><a>Content</a></li>
            </ul>
        </nav>
    </Fragment>

  )
}

export default Navbar