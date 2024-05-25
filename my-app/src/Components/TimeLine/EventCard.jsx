import React from 'react'

const EventCard = ({heading,subHeading}) => {
  return (
    <div className='transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4 '>
      <div className='text-white-800 font-bold text-lg border-b'>
        {heading}
      </div>
      <div className='text-sm text-gray-700'>
        {subHeading}
      </div>
    </div>
  )
}

export default EventCard
