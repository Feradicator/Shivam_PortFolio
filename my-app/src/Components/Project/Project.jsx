import React from 'react'
import project1 from './project1.gif'
import project2 from './project2.gif'

const Project = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <img src={project1} alt="GIF 1" className="w-1/2 md:w-1/3" />
        <img src={project2} alt="GIF 2" className="w-1/2 md:w-1/3" />
      </div>
      <div className="flex justify-center items-center space-x-4">
        <img src={project1} alt="GIF 1" className="w-1/2 md:w-1/3" />
        <img src={project2} alt="GIF 2" className="w-1/2 md:w-1/3" />
      </div>
      
    </div>
  )
}

export default Project
