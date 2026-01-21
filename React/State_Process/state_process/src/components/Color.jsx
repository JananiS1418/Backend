import React, { useState } from 'react'

const Color = () => {
    const [color,setColor]= useState(true)
    
    const changecolor = ()=>{
        setColor(!color)
    }
  return (
    <>
    <div>
        <button onClick={changecolor} style={{color:color?"red":"blue"}}>Change text color</button>
    </div>
    </>
  )
}

export default Color
