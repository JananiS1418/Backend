import React, { useRef } from 'react'

const Background = () => {

  const colorref = useRef(null)

  const handleChange = () => {
    colorref.current.style.backgroundColor = "pink"
    colorref.current.style.color = "black" 
  }

  return (
    <>
      <div ref={colorref} className='bg-cyan-900 h-100 flex flex-col mt-2 justify-center items-center p-3 gap-3 text-white'>
        <h1 className='text-2xl '>Change the Background color</h1>
        <button className='bg-white text-black p-1 w-30' onClick={handleChange}>Color Change</button>
      </div>
    </>
  )
}

export default Background
