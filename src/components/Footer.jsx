import React from 'react'
import Socialicons from './Socialicons'
const Footer = () => {
  return (
    <div id='contactme' className='w-[100vw] bg-secondary flex sm:flex-row flex-col  items-center justify-evenly pt-[40px] sm:pb-[40px] pb-[150px] mt-[50px]'>
        <a href='mailto:Contact@souhaybkamal.com' className='underline underline-offset-1 m-[10px]' target='_blank' rel=" noreferrer noopener" >
          Contact@souhaybkamal.com
        </a>
        <Socialicons/>
        <a href='https://www.upwork.com/workwith/souhayb' className='underline underline-offset-1 m-[10px]' target='_blank' rel=" noreferrer noopener" >
          Work with me
        </a>
    </div>
  )
}

export default Footer