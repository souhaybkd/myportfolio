import React from 'react'
import { arrow1 , arrow2 } from '../assets'

const About = () => {
  const backgroundStyle = {
    backgroundColor : "black"
  }
  return (
    <section className='flex flex-col justify-start items-center ss:py-[50px] pt-[30px]  relative ss:h-auto h-[50vh]'>
      <h3 className='ss:hidden flex text-[22px] font-medium text-white pb-[20px]'>About</h3>
      <div  className='max-w-[700px] ss:px-[50px] px-[15px] ss:py-[20px] py-[10px] ss:mx-0 mx-[20px] border-solid border-black border-[1px] rounded-[20px]  bg-gradient-to-r from-[#5E5D5D] to-[#393939] '>
        <p className='text-white font-light ss:text-[24px] text-[16px]'>I'm a frontend web developer from Lebanon working with modern front-end technologies. I can build your Website and transform your design into a responsive web application. I take my work seriously, as well as any criticism of it. I work according to accepted standards or specifications.</p>
      </div>
      <img src={arrow2} alt='arrow2' className='mt-[15px]'/>
      <img src={arrow1} className='absolute left-[20%] top-[-20%] ss:flex hidden' alt='arrow' />
    </section>
  )
}

export default About