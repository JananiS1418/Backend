import React from 'react'

const Child = ({increment}) => {
  return (
    <>
    <button className='bg-white text-black w-20' onClick={increment}>Count</button>
    </>
  )
}

export default Child
