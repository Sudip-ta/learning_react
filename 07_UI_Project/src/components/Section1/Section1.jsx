import React from 'react'
import Navbar from './Navbar'
import PageoneContent from './PageoneContent'

const Section1 = ({userData}) => {
  // console.log({userData});
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <PageoneContent userData={userData}/>
    </div>
  )
}

export default Section1