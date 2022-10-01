import React from 'react'
import { background1 , profiledesktop , bgpattern} from '../assets'
import Navbar from './Navbar'
import Socialicons from './Socialicons'

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage : `url("${background1}")`,
    backgroundSize : 'contain'
  }
  return (
    <section className={`relative flex ss:flex-col flex-col-reverse items-center justify-center py-[4%]  w-[100vw] ss:h-[100vh] h-[50vh]  bg-cover bg-no-repeat text-[50px] text-black`}
      style={backgroundImageStyle} >
      <div className='text-white text-center py-[20px] ss:mt-0 mt-[30px]'>
        <h1 className='ss:text-[80px] text-[28px] font-bold '>Souhayb Kamal Eldine</h1>
        <h4 className='ss:text-[40px] text-[15px] font-medium ss:mt-[-15px] '>{`Front-end & Wordpress developer`}</h4>
      </div>
      <Socialicons/>
      <img src={profiledesktop} alt='profile picture' className='py-[20px] ss:w-auto w-[40%]'/>
      <div className='pt-[30px]'>
      <Navbar/>
      </div>
      <img className='absolute ss:flex hidden bottom-[20px] right-[50px]' src={bgpattern} alt='background pattern' />
    </section>
  )
}

export default Hero