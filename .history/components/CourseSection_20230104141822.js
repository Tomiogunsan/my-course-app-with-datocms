import React from 'react'
import { Inter } from '@next/font/google'
import Course

function CourseSection({details}) {
    console.log(details)
    if(details.__typename ==='CourseHeaderRecord'){
        return <CourseHeaderRecord details={details}/>
    }
  return (
    <div>
        vvv
    </div>
  )
}

export default CourseSection