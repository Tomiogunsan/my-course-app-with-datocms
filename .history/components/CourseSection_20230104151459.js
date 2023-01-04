import React from 'react'
import CourseHeaderRecord from './CourseHeaderRecord'
import CalloutRecord from './CalloutRecord'
import LearnSectionRecord from './LearnSectionRecord'
import PricingSectionRecord from './PricingSectionRecord'



function CourseSection({details}) {
    console.log(details);
    if(details.__typename === 'CourseHeaderRecord'){ 
    return <CourseHeaderRecord details={details}/>;
    } else if  (details.__typename === 'CalloutRecord') {
    return <CalloutRecord details={details} />;
    }else if (details.__typename === 'LearnSectionRecord') {
     return  <LearnSectionRecord details={details} />;
    } else if (details.__typename === 'PricingSectionRecord') {
    return <PricingSectionRecord details={details} />
    }
  
    
  return (
    <div>
        
    </div>
  )
}

export default CourseSection