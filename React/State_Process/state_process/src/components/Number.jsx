import React, { useState } from 'react'

const Number = () => {

    const [number,setNumber] = useState(0)

    const changenumber = () =>{
        setNumber(number-1)

    }
    
  return (
    <>
      <div>
        <p>{number}</p>
        <p>{number>0?"Positive":number<0?"Negative":"Zero"}</p>
        <button onClick={changenumber}>Click </button>
      </div>
    
     </>
  )
}

export default Number
