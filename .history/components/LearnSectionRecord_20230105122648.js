import React from 'react'

export default function LearnSectionRecord({details}) {
  return (
    <div className='max-w-8xl mx-auto py-20 px-8'>
        <h2 className='text-4xl font-bold mb-8'>
          {details.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {details.learningPoints.map(point => (
            <div className='flex flex-col text-gray-600 bg-gray-50 rounded-lg' key={point.id}>
                <div className='py-3 px-3 flex items-center justify-between border-2 border-gray-500 rounded-t-lg text-gray-700 font-bold'>
                    <div className='flex space-x-1.5 '>
                    <div className='w-3 h-3 rounded-full bg-red-500'></div>
                    <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                    <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    </div>
                </div>
                <div className='flex-grow flex items-center justify-center py-6 px-8 rounded-b-lg border-2 border-gray-500 border-t-0 text-center'>
                    {point.t}
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}
