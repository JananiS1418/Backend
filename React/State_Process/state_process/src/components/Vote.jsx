import React, { useState } from 'react'

const Vote = () => {

    const [age,setAge] = useState(18)

    const changeage = ()=>{
        setAge(age)
        if(age >= 18){
            alert("Eligibility")
        }
        else{
            alert("Not eligibility")
        }
    }
  return (
    <>
     <div>
        <p>{age}</p>
        <button onClick={changeage}>Click</button>
     </div>
     
    
    </>
  )
}

export default Vote
