import React from 'react'


export default function CourseHeaderRecord({details}) {
  return (
    <div className='bg-gray-200 px-10 py-20 flex-col items-center' >
        <h1 className='text-2xl text-center text-gray-600 font-bold'>
            {details.smallTitle}
            <span className='block text-gray-900 text-6xl font-bold mb-10'>
                {details.bigTitle}
            </span>
        </h1>
        <p cl></p>

    </div>
  )
}
