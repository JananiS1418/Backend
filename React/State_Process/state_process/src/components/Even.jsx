import React, { useState } from 'react'

const Even = () => {

    const[data,setData]= useState(0)
    const handleclick = ()=>{
        setData(data+1)
    }

  return (
    <>
      <div>
        <p>{data}</p>
        <p>{data%2===0 ?"even":"odd"}</p>
      </div>
     <button onClick={handleclick}>Click</button>
    </>
  )
}

export default Even
