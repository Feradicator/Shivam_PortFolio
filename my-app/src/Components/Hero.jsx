import React from "react";
import { HERO_CONTENT } from "../constants";
import Shivam1 from "../assets/Shivam1.jpg";
import Shivam2 from "../assets/Shivam2.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const container1 = (duration) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
    },
  },
});

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="my-0 max-w-xl py-2 font-light tracking-tighter text-7xl"
            >
              <Typewriter
                words={["Hii,Welcome!"]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </motion.h2>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-6xl font-thin tracking-tight lg:mt-4 lg:text-8xl"
            >
              I'm Shivam
            </motion.h1>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
            <button className="flex items-center bg-transparent border border-white rounded-full px-4 py-2 text-white hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out">
              <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
              CV / RESUME
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={Shivam2}
              className="object-cover w-3/4 h-auto rounded-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
