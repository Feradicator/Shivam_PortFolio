import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import ShivamLogo from "../../assets/ShivamLogo.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import About from "../About/About";
// import Technologies from './Components/Technologies/Technologies';
import { motion } from "framer-motion";
// import TimeLine1 from './Components/TimeLine1/TimeLine1';
// import Project from './Components/Project/Project';
// import Contact from './Components/Contact/Contact';
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 ${scrolling ? 'bg-gray-300 bg-opacity-5 ' : ''}`}>
      <div className="flex items-center mx-auto">
        <img src={ShivamLogo} alt="logo" className="mx-2 w-10" />
      </div>

      <div className="flex-grow flex justify-center items-center gap-8 text-2xl hidden md:flex">
      <Link to="about" spy={true} smooth={true} duration={500} className={`hover:cursor-pointer ${scrolling ? '' : ''}`}>About</Link>
      <Link to="timeline" smooth={true} duration={500} className={`hover:cursor-pointer ${scrolling ? '' : ''}`}>Timeline</Link>
        <Link to="technologies" smooth={true} duration={500} className={`hover:cursor-pointer ${scrolling ? '' : ''}`}>Technologies</Link>
        <Link to="projects" smooth={true} duration={500} className={`hover:cursor-pointer ${scrolling ? '' : ''}`}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} className={`hover:cursor-pointer ${scrolling ? '' : ''}`}>Contact</Link>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/yadavshivam0408/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Feradicator" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl" />
        </a>
        <a href="https://www.instagram.com/imshivam_y?igsh=MWtlbnZmczNzNzBqNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006868120270&sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
        variants={container(0.5)}
        initial="hidden"
        animate="visible"
        className="absolute top-full left-0 right-0 bg-black text-white shadow-lg flex flex-col items-center gap-4 p-4 md:hidden z-50 transform transition-transform ease-in-out duration-300">
          <a href="#about" className="hover:underline">About</a>
          <a href="#timeline" className="hover:underline">Timeline</a>
          <a href="#technologies" className="hover:underline">Technologies</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
