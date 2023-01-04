import React from 'react'
import { Inter } from '@next/font/google'

function CourseSection({details}) {
    console.log(details)
    if(details.__typename ==='Course')
  return (
    <div>
        vvv
    </div>
  )
}

export default CourseSection