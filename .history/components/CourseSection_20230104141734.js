import React from 'react'
import { Inter } from '@next/font/google'

function CourseSection({details}) {
    console.log(details)
    if(details.__typename ==='CourseHeaderRecord'){
        return <CourseHeader
    }
  return (
    <div>
        vvv
    </div>
  )
}

export default CourseSection