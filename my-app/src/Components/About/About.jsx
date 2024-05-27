import React from 'react'
import aboutme from './aboutme.jpg'
import { ABOUT_TEXT, HERO_CONTENT } from '../../constants'
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'>
        About 
        <span className='text-neutral-500'> Me</span>
        </h2>
        <div className='flex flex-wrap items-center'>
    <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
            <img src={aboutme} alt="about" className='object-cover w-3/4 h-auto rounded-3xl' />

        </div>

    </motion.div>
    <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.5}}
        className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
        <div className='max-w-xl py-6 text-xl font-light tracking-tighter'>
            {ABOUT_TEXT}
        </div>

    </motion.div>
</div>
        

     
    </div>
  )
}

export default About
