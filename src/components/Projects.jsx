import React from 'react'
import { fyloProject , csssupertools , ecoproduct , clothesstore } from '../assets'

const projectsDetails = [
    {
        name: 'Css supertools',
        image : csssupertools,
        description :"The website Contains more than 50 useful resources to learn, and practice CSS",
        link: 'https://css-supertools.com/'
    },
    {
        name: 'ecommerce product page',
        image : ecoproduct,
        description :"eCommerce system , you can add and remove items to cart, and choose the quantity of products",
        link: 'https://pro-ecommerce-products.netlify.app/'
    },
    {
        name: 'fylo landing page',
        image : fyloProject,
        description :"Fylo , is a landing page for a software business , is fully responsive",
        link: 'https://fylo-company.netlify.app/'
    },
    {
        name: 'Clothes Store',
        image : clothesstore,
        description :"Fully clothes woocomerce website , start selling from today ",
        link: 'https://store.souhaybkamal.com/'
    },
]


const Projects = () => {
  return (
    <section id='projects' className='text-white ss:mt-[100px] ss:px-[200px] ss:pb-[80px] text-center'>
        <h3 className='text-[48px] py-[40px] font-semibold'>Projects</h3>
        <ul className='grid ss:grid-cols-3 grid-cols-1 place-items-center gap-[30px] mb-[60px]'>
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
        <a href='https://github.com/souhaybkd' target='_blank' rel=" noreferrer noopener" 
            className='bg-secondary px-[40px]  py-[15px] text-black rounded-[15px] font-semibold text-[20px]'>
            <button >Visit My Github Account</button>
        </a>
        
    </section>
  )
}
export default Projects