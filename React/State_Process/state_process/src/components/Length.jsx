import React, { useState } from 'react'

const Length = () => {
    const [text,setText] = useState("")
    const [length,setLength] = useState(0)
    const changedata = (e)=>{
        setText(e.target.value)
    }
    const clicklength = ()=>{
        setLength(text.length)
    } 
  return (
    
    <>
     <div>
        <input type="text" placeholder='text' onChange={changedata} />
        <p>Length:{length}</p>
        <button onClick={clicklength}>Show Length</button>

     </div>
    </>
  )
}

export default Length
