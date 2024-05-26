import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

import { SiMysql } from "react-icons/si";
import { SiJava } from "react-icons/si"; // This is a Java icon, which Spring Boot is based on.

import spring from "./spring.png";
import c_plus from "./c_plus.png";
import c from './c.png'
import css from './css.png'
import github from './github.png'
import html from './html.png'
import java from './java.png'
import javascript from './javascript.png'
import mysql from './mysql.png'
import python from './python.png'
import tailwind_css from './tailwind_css.png'

import { animate, motion } from "framer-motion"
const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
       initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4 m-4">
       
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-16 h-16">
            <img
              src={c_plus}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-16 h-16">
            <img
              src={c}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        
        <motion.div
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-16 h-16">
            <img
              src={python}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-16 h-16">
            <img
              src={html}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-16 h-16">
            <img
              src={css}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-16 h-16">
            <img
              src={javascript}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
       
        
      </motion.div>
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4 m-4">

      <motion.div
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-neutral-800 p-4">
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-14 h-14 m-4">
            <img
              src={tailwind_css}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-10 h-10 m-4">
            <img
              src={mysql}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain rounded-full"
            />
          </div>
        </motion.div>
      <motion.div 
      variants={iconVariants(3)}
      initial="initial"
      animate="animate"
      className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-14 h-14 m-4">
            <img
              src={java}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
      <motion.div
      variants={iconVariants(4)}
      initial="initial"
      animate="animate"
      className="rounded-2xl  border-neutral-800 p-4 relative ">
          <div className="w-10 h-10 m-4">
            <img
              src={spring}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl  border-neutral-800 p-4 relative">
          <div className="w-10 h-10 m-4">
            <img
              src={github}
              alt="Logo"
              className="absolute inset-0 w-full h-full object-contain bg-white rounded-full "
            />
          </div>
        </motion.div>
       

      </motion.div>
    </div>
  );
};

export default Technologies;
