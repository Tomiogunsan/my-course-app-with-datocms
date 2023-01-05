import React from 'react'

export default function PricingSectionRecord({details}) {
  return (
    <div className='bg-purple-600 py-20 px-10 max-w-100 '>
      <h1 className='text-center text-8xl font-bold text-white mb-20'>{details.title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>
    </div>
  )
}
