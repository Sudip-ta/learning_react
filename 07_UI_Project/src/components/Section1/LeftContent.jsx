import React from 'react'
import {ArrowUpRight} from 'lucide-react'
const LeftContent = () => {
  return (
    <div className='w-1/4 h-full flex flex-col justify-between'>
        <div className='px-8 mt-12'>
            <h1 className='text-5xl font-bold mb-6 leading-1.1'>Prospective <br /><span>customer</span><br /> segmentation</h1>
            <p className='text-lg text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione omnis, aliquam sit quasi necessitatibus nesciunt suscipit? Labore, tempore debitis?</p>
        </div>
        <div>
            <ArrowUpRight size='4rem' strokeWidth={2}/>
        </div>
    </div>
  )
}

export default LeftContent