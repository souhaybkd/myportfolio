import React from 'react'
import { webicon , designicon , apiicon ,background2 ,} from '../assets'

const servicesDetails = [
    {
        name: 'build your website',
        icon: webicon,
        description: 'i will build your website using my experience in moderne web developement technologies '
    },
    {
        name: 'design to code',
        icon: designicon,
        description: 'i will transform anytype of design to a code who run in your browser '
    },
    {
        name: 'edit your website',
        icon: apiicon,
        description: 'i will edit your website , add sections , pages or any functionality you want and fix the bugs in your code'
    }
]

const Services = () => {
    const backgroundImageStyle = {
        backgroundImage : `url("${background2}")`,
        backgroundSize : 'cover'
    }
  return (
    <section id='services' style={backgroundImageStyle} className='text-white sm:mt-[100px] sm:px-[200px] sm:pb-[80px]  text-center'>
        <h3 className='text-[48px] py-[40px] font-semibold'>Services</h3>
        <ul className='flex sm:flex-row flex-col  justify-evenly items-center  '>
            {servicesDetails.map(service => {
                return(
                    <li className='flex flex-col items-center max-w-[300px] min-h-[350px] sm:mb-[0px] mb-[20px]  bg-[#A1A1A1]/[40%] rounded-[20px] backdrop-blur-[10px]'>
                        <img src={service.icon} alt={service.name} className='w-[80px] h-[80px] object-contain mt-[40px]' />
                        <h4 className='py-[20px] text-[24px]'>{service.name}</h4>
                        <p className='px-[20px] font-light h-[72px]'>{service.description}</p>
                        <a href='https://www.upwork.com/workwith/souhayb' 
                            className='bg-secondary w-[90%] mt-[25px] py-[10px] text-black rounded-[15px] font-bold'>
                            <button >Work With me</button>
                        </a>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default Services