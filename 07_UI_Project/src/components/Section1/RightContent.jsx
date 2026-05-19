import React from 'react'
import RightCard from './RightCard'

const RightContent = ({userData}) => {
  return (
    <div className='h-full w-3/4 p-6 pb-12 flex gap-6 overflow-x-auto'>
      {userData.map((user,index)=>{
        return <div key={index} className='h-full w-1/3 shrink-0'>
          <RightCard img={user.img} index={index}/>
          </div>
      })}
    </div>
  )
}

export default RightContent