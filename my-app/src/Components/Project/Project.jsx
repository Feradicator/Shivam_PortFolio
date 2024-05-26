import React from 'react';
import project1 from './project1.gif';
import project2 from './project2.gif';
import project3 from './project3.gif';
import project4 from './project4.gif';
import { useState } from 'react';

const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="flex justify-center items-center space-x-2 md:space-x-4 mb-8">
        <img
          src={project1}
          alt="GIF 1"
          className={`w-3/5 md:w-2/5 transition-transform duration-500 transform ${hoveredIndex !== 0 ? 'scale-75' : 'scale-105'}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={project2}
          alt="GIF 2"
          className={`w-3/5 md:w-2/5 transition-transform duration-500 transform ${hoveredIndex !== 1 ? 'scale-75' : 'scale-105'}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
      <div className="flex justify-center items-center space-x-2 md:space-x-4">
        <img
          src={project3}
          alt="GIF 1"
          className={`w-3/5 md:w-2/5 transition-transform duration-500 transform ${hoveredIndex !== 2 ? 'scale-75' : 'scale-105'}`}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        />
        <img
          src={project4}
          alt="GIF 2"
          className={`w-3/5 md:w-2/5 transition-transform duration-500 transform ${hoveredIndex !== 3 ? 'scale-75' : 'scale-105'}`}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Project;
