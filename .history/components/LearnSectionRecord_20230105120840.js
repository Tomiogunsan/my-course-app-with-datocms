import React from 'react'

export default function LearnSectionRecord({details}) {
  return (
    <div className='max-w-8xl mx-auto py-20 px-8'>
        <h2 className='text-4xl font-bold mb-8'>
          {details.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {details.learningPoints.map(point => (
            <div classNamekey={point.id}>

            </div>
          ))}
        </div>
    </div>
  )
}