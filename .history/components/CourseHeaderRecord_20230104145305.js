import React from 'react'

export default function CourseHeaderRecord({details}) {
  return (
    <div className='bg-gray-200 px-10 flex-col items-center' >
        <h1 className='text-2xl text-center text-gray-600 font-bold'>
            {details.smallTitle}
            <span className='block' ></span>
        </h1>
    </div>
  )
}
