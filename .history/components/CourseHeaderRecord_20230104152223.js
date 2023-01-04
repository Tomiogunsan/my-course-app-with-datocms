import React from 'react'


export default function CourseHeaderRecord({details}) {
  return (
    <div className='bg-gray-200 px-10 py-20 flex-col items-center' >
        <h1 className='text-2xl text-center text-gray-600 font-bold'>
            {details.smallTitle}
            <span className=' text-gray-900 text-6xl font-bold mb-10'>
                {details.bigTitle}
            </span>
        </h1>
        <p className='bg-yellow-300 max-w-lg text-gray-800 text-lg flex items-center justify-center'>
            {details.description}
        </p>

    </div>
  )
}
