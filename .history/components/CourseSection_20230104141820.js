import React from 'react'
import { Inter } from '@next/font/google'
import Co

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