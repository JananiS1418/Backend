import React from 'react'
import useToggle from '../hooks/useToggle'

const Toggle = () => {

    const {toggle,changetoggle} = useToggle(true)
  return (
    <>
     
      <div className='bg-amber-400 mt-2 p-3 flex  flex-col justify-center items-center gap-3'>
        <h1 className='text-2xl'>Toggle a Boolean Value</h1>
        <p>{toggle?"Show":"Hide"}</p>
        <button className='bg-black text-white w-20 rounded p-1' onClick={changetoggle}>Click</button>
      </div>
    </>
  )
}

export default Toggle
