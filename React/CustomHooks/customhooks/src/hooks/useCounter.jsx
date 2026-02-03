import React, { useState } from 'react'

const useCounter = (initialvalue = 0) => {

    const [count,setCount] = useState(initialvalue)

    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
  return {count,increment,decrement}
}

export default useCounter
