import React, { useRef } from 'react'

const Count = () => {

    const countref = useRef(0)
    const displayref = useRef(null)

    const handleClick = ()=>{
        countref.current += 1 
        displayref.current.innerText = countref.current
    }

  return (
    <>
    <div className='bg-blue-900 mt-2 h-100 text-white flex flex-col justify-center items-center gap-3'>
        <h1 className='text-2xl'>Display the Count</h1>
        <p ref={displayref}></p>
        <button className='bg-black text-white p-1 w-30 mb-3'onClick={handleClick} >Count</button>
    </div>
    </>
  )
}

export default Count
