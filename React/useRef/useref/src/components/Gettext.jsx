import React, { useRef } from 'react'

const Gettext = () => {

    const textref= useRef(null)
    const handleClick = ()=>{
        alert(textref.current.innerText)
    }
  return (
    <>
      <div className='bg-green-900 text-white flex gap-3 mt-2 flex-col h-100 justify-center items-center'>
        <p ref={textref}> This is the text</p>
        <button className='bg-white text-black p-2 rounded mb-2 w-30' onClick={handleClick}>Click</button>
      </div>
    </>
  )
}

export default Gettext
