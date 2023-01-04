import React from 'react'
import { Inter } from '@next/font/google'
import CourseHeaderRecord from './CourseHeaderRecord'
import CalloutRecord from './CalloutRecord'
import LearnSectionRecord from './LearnSectionRecord'

function CourseSection({details}) {
    console.log(details)
    (details.__typename ==='CourseHeaderRecord')?
     <CourseHeaderRecord details={details}/> :
     (details.__typename === 'CalloutRecord') ? 
     <CalloutRecord details={details} /> :
     (details.__typename === 'LearnSectionRecord') ?
     <LearnSectionRecord details={details} /> : 
     (details.__typename === '')
    
  return (
    <div>
        vvv
    </div>
  )
}

export default CourseSection