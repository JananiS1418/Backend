import React, { useRef } from 'react'

const Text = () => {
   const textref = useRef(null)
   const handleClick = ()=>{
    textref.current.innerText = "This is Changed text"
    
    textref.current.style.color = "black" 
   }
  return (
    <>
     <div className='bg-amber-800 text-white gap-4 p-3  h-100 flex flex-col justify-center items-center'>
        <h1 className='text-2xl'>Change the text when the button Clicks</h1>
        <h1 className='' ref={textref}>Change the Text</h1>
       
        <button className='bg-white text-black p-1 w-30 ' onClick={handleClick}>Change</button>
     </div>
     
    </>
  )
}

export default Text
