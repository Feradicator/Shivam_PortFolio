import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);

      // Determine active section based on scroll position
      const sections = ["about", "timeline", "technologies", "projects", "contact"];
      const scrollPosition = window.scrollY + 200; // Offset to adjust active section
      let activeSec = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          activeSec = section;
        }
      });

      setActiveSection(activeSec);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 h-24 ${scrolling ? 'bg-gray-600 bg-opacity-5 backdrop-blur-lg' : ''}`}>
      <div className="flex-grow flex justify-center items-center gap-8 text-2xl hidden md:flex">
        {["about", "timeline", "projects","technologies", "contact"].map((section, index) => (
          <Link key={index} to={section} spy={true} smooth={true} duration={500} className={`hover:cursor-pointer ${activeSection === section ? 'text-yellow-300' : ''}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {[
          { url: "https://www.linkedin.com/in/yadavshivam0408/", icon: <FaLinkedin /> },
          { url: "https://github.com/Feradicator", icon: <FaGithub className="text-white text-2xl" /> },
          { url: "https://www.instagram.com/imshivam_y?igsh=MWtlbnZmczNzNzBqNw==", icon: <FaInstagram /> },
          { url: "https://www.facebook.com/profile.php?id=100006868120270&sfnsn=wiwspwa&mibextid=RUbZ1f", icon: <FaFacebook /> }
        ].map((item, index) => (
          <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        ))}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute top-full left-0 right-0 bg-black text-white shadow-lg flex flex-col items-center gap-4 p-4 md:hidden z-50 transform transition-transform ease-in-out duration-300">
          {["about", "timeline", "technologies", "projects", "contact"].map((section, index) => (
            <a key={index} href={`#${section}`} className="hover:underline">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default NavBar;
