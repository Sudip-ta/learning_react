import React, { useState } from 'react'
import {ArrowBigRight} from 'lucide-react'
const App = () => {

const [caption, setCaption] = useState('');

  const btnClicked = ()=>{
    return setCaption("");
  }

  const inputTyped = (e) =>{
    console.log(e);
    if(e.nativeEvent.data==null) return setCaption(caption+" ");
    return setCaption(caption+e.nativeEvent.data);
  }

  return (
      <div className='h-screen p-4 w-full flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-4'>Hello</h1>

        <div className='flex gap-4'>
          <div className='flex'>Click this button to reset input<ArrowBigRight /></div>
          <button onClick={btnClicked} className='px-4 py-1 text-white bg-gray-500 rounded-full hover:bg-gray-800'>Click me</button>
        </div>
        <div className='mt-4'><input type="text" placeholder='Type your name' onChange={inputTyped} className='border border-black text-center'/></div>
        <div className='items-center text-5xl font-bold'>{caption}</div>
      </div>
  )
}

export default App