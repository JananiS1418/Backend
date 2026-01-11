import React, { useState } from 'react'
import ChildCounter from './ChildCounter'

const ParentCounter = () => {
    const [count,setCount]= useState(0)

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
  return (
    <>
    <p>{count}</p>
    <ChildCounter dataincrement={increment} datadecrement={decrement}/>
    </>
  )
}

export default ParentCounter
