import React from 'react'
import { Inter } from '@next/font/google'
import CourseHeaderRecord from './CourseHeaderRecord'

function CourseSection({details}) {
    console.log(details)
    (details.__typename ==='CourseHeaderRecord')?
     <CourseHeaderRecord details={details}/> :
     (details.__typename === 'CalloutRecord') ? <Callout
    
  return (
    <div>
        vvv
    </div>
  )
}

export default CourseSection