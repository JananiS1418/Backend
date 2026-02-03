import React from 'react'
import useCounter from '../hooks/useCounter'

const Count = () => {

    const {count,increment,decrement} = useCounter(0)
  return (
    <>
    <h1 className='bg-cyan-900 text-white text-2xl text-center p-3'>Count , Increment and Decrement</h1>
    <div className='bg-cyan-900 gap-2 text-white flex flex-col justify-center items-center'>
        <p>{count}</p>
        <div className='flex gap-6 mb-3'>
            <button className='bg-white rounded text-black w-25 p-2 text-center  ' onClick={increment}>Increment</button>
            <button className='bg-white rounded text-black w-25 ' onClick={decrement}>Decrement</button>


        </div>
     
    </div>
     
     
    </>
  )
}

export default Count
