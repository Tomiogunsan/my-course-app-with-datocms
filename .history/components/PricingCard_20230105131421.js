import { defaultFieldResolver } from 'graphql'
import React from 'react'

export default function PricingCard({details}) {
  return (
    <div className='w-full bg-purple-500 max-w-sm rounded-lg p-6'>
        <h3 className='text-white text-xl mb-4 uppercase'>{details.title}</h3>
        {details.isFree ? <span>FREE</span>: <span>${details.priceInCents/100}</span>}
        {details.priceSuffix && <span className='text-gray-500'></span>}
    </div>
  )
}
