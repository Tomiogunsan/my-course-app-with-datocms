import React from 'react'

export default function CalloutRecord({details}) {
  return (
    <div className='bg-gray-800 py-20 px-10'>
        <div className='flex flex-col max-w-6xl md:flex-row md:items-center mx-auto'>
            <div className='md:w-[60%] grow p-4'>
                <h2 className='text-4xl text-gray-200  font-bold'>
                  {details.smallTitle}
                  <span cl>{details.bigTitle}</span>
                </h2>
            </div>
        </div>
    </div>
  )
}
