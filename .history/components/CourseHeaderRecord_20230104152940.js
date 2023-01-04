import React from 'react'


export default function CourseHeaderRecord({details}) {
  return (
    <div className='bg-gray-200 px-10 py-20 flex-col items-center justify-center' >
        <h1 className='text-2xl text-center text-gray-600 font-bold'>
            {details.smallTitle}
            <span className='block text-gray-900 text-6xl font-bold mb-10'>
                {details.bigTitle}
            </span>
        </h1>
        <p className=' max-w-lg text-gray-500 text-lg mx-auto text-center'>
            {details.description}
        </p>
        <a href='#Pricing' className='rounded-md bg-yellow-300 mt-8 py-3 px-4 text-gray-800 text-xl>
            {details.buttonText}</a>

    </div>
  )
}
