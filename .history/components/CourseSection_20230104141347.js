import React from 'react'
import { Inter } from '@next/font/google'

function CourseSection({details}) {
    console.log(details)
    if(details.__typename ==='C')
  return (
    <div>
        vvv
    </div>
  )
}

export default CourseSection