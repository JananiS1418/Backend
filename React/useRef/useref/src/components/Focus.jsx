import React, { useEffect, useRef } from 'react'

const Focus = () => {
    const focusref = useRef(null)

    useEffect(()=>{
        focusref.current.focus()
    },[])

  return (
    <>
    <div className='bg-fuchsia-400 h-100 text-black flex flex-col justify-center items-center gap-3 mt-2'>
       <h1 className='text-2xl'>Focus on Input Box</h1>
       <input className='mb-4 bg-black text-white w-50 p-1  border-white' ref={focusref} type="text" placeholder='Enter your name' />

    </div>
    </>
  )
}

export default Focus
