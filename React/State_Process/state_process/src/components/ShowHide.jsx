import React, { useState } from 'react'

const ShowHide = () => {
    const [show,setShow] = useState(true)
    const showdata = ()=>{
        setShow(!show)
    }

  return (
    <>
      <div>
        <input type={show?"text":"password"} placeholder='password'  />
        <button onClick={showdata}>Show/Hide</button>
      </div>
    
    </>
  )
}

export default ShowHide
