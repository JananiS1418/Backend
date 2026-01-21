import React, { useState } from 'react'

const Marks = () => {
    const [mark,setMark] = useState(49)

    const changemark = ()=>{
        setMark(mark)
        if(mark>=50){
            alert("Pass")

        }else{
            alert("Fail")
        }
    }
  return (
    <>
      <div>
        <p>{mark}</p>
        <button onClick={changemark}>Pass/Fail</button>
      </div>
    </>
  )
}

export default Marks
