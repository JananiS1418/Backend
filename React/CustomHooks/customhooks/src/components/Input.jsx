import React from 'react'
import useInput from '../hooks/useInput'

const Input = () => {
    const {value,changevalue} = useInput("")
  return (
    <>
     <div className='bg-fuchsia-900 text-white flex flex-col justify-center items-center gap-3 mt-2'>
       <h1 className='text-2xl'>Handle input value</h1>
       <p>{value}</p>
       <input className='mb-4 border-amber-50 border-2' onChange={changevalue} type="text" placeholder='Enter Your name ' />
        
     </div>
    </>
  )
}

export default Input
