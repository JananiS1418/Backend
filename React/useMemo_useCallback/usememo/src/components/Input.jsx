import React from 'react'

const Input = ({changevalues}) => {
  return (
    <>
    <div className='flex gap-3 flex-col justify-center items-center'>
        <input className='bg-white rounded p-1 text-black w-50' type="text" onChange={changevalues} placeholder='Enter your name'/>
        <input className='bg-white rounded  p-1 text-black w-50' type="email" onChange={changevalues} placeholder='Enter your email'/>
        <input className='bg-white rounded p-1 text-black w-50' type="password" onChange={changevalues} placeholder='Enter your password'/>

    </div>
    </>
  )
}

export default Input
