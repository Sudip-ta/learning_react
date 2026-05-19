import React from 'react'

import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageoneContent = ({userData}) => {
  return (
    <div className='p-8 flex justify-between items-center h-[90vh] gap-10'>
        <LeftContent/>
        <RightContent userData={userData}/>
    </div>
  )
}

export default PageoneContent