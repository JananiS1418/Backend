import React, { useState } from 'react'

const Button = () => {

    const [text,setText] = useState(true)

    const changeclick = ()=>{
        setText(!text)
    }
  return (
    <>
    <div>
        <p>{text?"ON":"OFF"}</p>
        <button onClick={changeclick}>Click</button>
    </div>
    
    </>
  )
}

export default Button
