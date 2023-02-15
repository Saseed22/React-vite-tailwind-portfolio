import React from 'react'

const WorkItems = ({years,title,duration,details}) => {
  return (
      <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
          <li className='mb-10  ml-4'>
              <div className='rounded-full w-3 h-3 absolute bg-stone-200 -left-1.5 mt-1.5  border-white' />
              <p className='flex flex-wrap justify-start items-center text-xs md:text-sm gap-4 '>
                  <span className='bg-[#001b5e] text-white rounded-md font-semibold px-2 py-1 inline-block'>{ years}</span>
                  <span className='text-[#001b5e] text-lg font-semibold ' >{title} </span>
                  <span className='text-stone-400 text-sm font-normal my-1 leading-none '>{duration} </span>
              </p>
              <p className='text-stone-500 text-base font-normal my-2'>{details }</p>
         </li>

    </ol>
  )
}

export default WorkItems