import React from 'react'
import { fyloProject , csssupertools , ecoproduct } from '../assets'

const projectsDetails = [
    {
        name: 'Css supertools',
        image : csssupertools,
        description :"i'm a frontend web developer from lebanon working ",
        link: 'https://css-supertools.com/'
    },
    {
        name: 'ecommerce product page',
        image : ecoproduct,
        description :"i'm a frontend web developer from lebanon working ",
        link: 'https://pro-ecommerce-products.netlify.app/'
    },
    {
        name: 'fylo landing page',
        image : fyloProject,
        description :"i'm a frontend web developer from lebanon working ",
        link: 'https://fylo-company.netlify.app/'
    },
]


const Projects = () => {
  return (
    <section className='text-white ss:mt-[100px] ss:px-[200px] ss:pb-[80px] text-center'>
        <h3 className='text-[48px] py-[40px] font-semibold'>Projects</h3>
        <ul className='grid ss:grid-cols-3 grid-cols-1 place-items-center gap-[30px]'>
            {projectsDetails.map(project => {
                return(
                    <li key={project.description} 
                        className='flex flex-col items-center bg-secondary max-w-[300px] rounded-[10px] '>
                        <img className='rounded-[10px]' src={project.image} alt={project.name} />
                        <p className='text-black font-light h-[70px] px-[20px]'>{project.description}</p>
                        <a href={project.link} target='_blank' rel=" noreferrer noopener"  className='bg-primary w-[90%] my-[10px] py-[10px] text-white rounded-[15px]'>Visit</a>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}
export default Projects