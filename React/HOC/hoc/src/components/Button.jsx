import React from 'react'

const Button = ({text,show}) => {
  return (
    <>
      <button onClick={show} className='bg-black text-white p-2 w-40'>{text}</button>
     </>
  )
}

export default Button
