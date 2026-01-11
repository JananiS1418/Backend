import React from 'react'
import Button from './Button'

const Parent = () => {
  return (
    <>
     <Button label = "click me" onClick={()=>{alert("button Clicked")}} />
    </>
  )
}

export default Parent
