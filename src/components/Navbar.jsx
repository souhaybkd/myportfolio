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
                <li><a href='#aboutme'>About me</a></li>
                <li><a href='#services'>Services</a></li>
                <li><a href='#projects'>Projects</a></li>
                {/* <li><a href='content'>Content</a></li> */}
                <li><a href='#contactme'>Contact me</a></li>
            </ul>
        </nav>
        <div className='flex justify-center w-[100vw] fixed bottom-[50px] z-50 left-0 text-[16px] ss:hidden font-medium '>
        <nav style={backgroundImageStyle} className='rounded-[20px]'>
            <ul  className='p-[10px] flex justify-evenly w-[300px]  backdrop-blur-[2px]  text-black rounded-[20px]'>
                <li><a href='#services'>Services</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contactme'>Contact me</a></li>
            </ul>
        </nav>
        </div>
    </Fragment>

  )
}

export default Navbar