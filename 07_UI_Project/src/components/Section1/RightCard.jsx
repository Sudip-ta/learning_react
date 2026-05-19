import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCard = ({img,index}) => {
  return (
    <div className='h-full w-full relative'>
        <img src={img} alt="" className='h-full rounded-4xl object-cover'/>
        {/* what does object cover doesIn CSS (and utility frameworks like Tailwind CSS), object-fit: cover (written as object-cover in Tailwind) forces a replaced element—like an <img> or <video>—to completely fill its container's dimensions while preserving its original aspect ratio.How It WorksIf the aspect ratio of the image does not perfectly match the aspect ratio of its parent box, the image will be cropped. It will scale up or down until the entire box is covered, slicing off the excess from the sides or the top and bottom to prevent any distortion or stretching. */}
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <div className='bg-white w-10 h-10 rounded-full font-bold flex justify-center items-center'>{index+1}</div>
            <div>
                <p className='w-2/3 text-white font-bold mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At doloribus autem dolores! Tenetur, commodi alias.</p>
                <div className='w-full flex justify-between items-center'>
                    <button className='text-white bg-blue-600 px-10 py-2 rounded-full'>Satisfied</button>
                    <button className='bg-blue-600 text-white rounded-full p-1.5'> <ArrowRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard