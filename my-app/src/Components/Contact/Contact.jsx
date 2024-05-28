import React from 'react'
import { animate, motion } from "framer-motion"
const Contact = () => {
  return (
    <section id='contact'>
       <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
       className='my-10 text-center text-4xl'>
        Get In Touch
      </motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='my-4'>+919717219842</motion.p>
        <motion.p
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
         transition={{duration:1}}
         className='my-4'></motion.p>
        <a href="#" className='border-b'>
            yadavshivam042001@gmail.com
        </a>

      </div>
    </div>
    </section>
   
  )
}

export default Contact
