import React from 'react'
import { github , instagram , linkedin } from '../assets'

const Socialicons = () => {
  return (
    <div className='w-[150px] h-[40px] flex justify-around  items-center'>
        <a href='https://github.com/souhaybkd'><img src={github} alt='my github account' /></a>
        <a href='https://www.linkedin.com/in/souhayb-kamal-101288215/'><img src={linkedin} alt='my linkedin account' /></a>
        <a href='https://www.instagram.com/souhaybcode/'><img src={instagram} alt='my instagram account' /></a>
    </div>
  )
}

export default Socialicons