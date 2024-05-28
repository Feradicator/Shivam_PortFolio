import React from "react";
import project1 from "./project1.gif";
import project2 from "./project2.gif";
import project3 from "./project3.gif";
import project4 from "./project4.gif";
import { useState } from "react";
import { animate, motion } from "framer-motion"
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";
const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="projects">
       <div className="border-b border-neutral-800 pb-4">
      <motion.h1 
       whileInView={{opacity:1,y:0}}
       initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl">Projects</motion.h1>
      <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-8">
       
        <motion.div
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:-100}}
          transition={{duration:1.5}}
          className="relative w-3/5 md:w-2/5"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project1}
            alt="GIF 1"
            className={`w-full transition-transform duration-500 transform ${
              hoveredIndex !== 0 ? "scale-75" : "scale-105"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gray-700 bg-opacity-50 transition-opacity duration-300 flex justify-center items-center ${
              hoveredIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              <a href="https://gemini-clone-dusky.vercel.app/" target="_blank">
                <GrDeploy  className="text-white text-4xl" />
              </a>
              <a href="https://github.com/Feradicator/GeminiClone" target="_blank">
                <FaGithub className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
          className="relative w-3/5 md:w-2/5"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project2}
            alt="GIF 1"
            className={`w-full transition-transform duration-500 transform ${
              hoveredIndex !== 1 ? "scale-75" : "scale-105"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gray-700 bg-opacity-50 transition-opacity duration-300 flex justify-center items-center ${
              hoveredIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              <a href="https://yadavshivam-ecommerce0408.vercel.app/" target="_blank">
                <GrDeploy  className="text-white text-4xl" />
              </a>
              <a href="https://github.com/Feradicator/Ecommerce0408" target="_blank">
                <FaGithub className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </motion.div>



      </div>

      <div className="flex justify-center items-center space-x-2 md:space-x-4">
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
          className="relative w-3/5 md:w-2/5"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project3}
            alt="GIF 1"
            className={`w-full transition-transform duration-500 transform ${
              hoveredIndex !== 2 ? "scale-75" : "scale-105"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gray-700 bg-opacity-50 transition-opacity duration-300 flex justify-center items-center ${
              hoveredIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
             <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              <a href="https://shivam-port-folio.vercel.app/" target="_blank">
                <GrDeploy  className="text-white text-4xl" />
              </a>
              <a href="https://github.com/Feradicator/Shivam_PortFolio" target="_blank">
                <FaGithub className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:100}}
        transition={{duration:1.5}}
          className="relative w-3/5 md:w-2/5"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project4}
            alt="GIF 1"
            className={`w-full transition-transform duration-500 transform ${
              hoveredIndex !== 3? "scale-75" : "scale-105"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gray-700 bg-opacity-50 transition-opacity duration-300 flex justify-center items-center ${
              hoveredIndex === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
              
              <a href="https://github.com/Abhi007-glitch/CDAC-Final-Project" target="_blank">
                <FaGithub className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </section>
   
  );
};

export default Project;
