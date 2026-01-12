import React, { useState } from 'react'
import UserStatus from './UserStatus'

const MainApp = () => {

    const [user,setUser] = useState(null)


  const Toggleclick = ()=>{

    setUser(pres=>pres===null? {
            name: "Janani",
            email: "janani@gmail.com",
            isActive: true,
          }:null)

  }
    
  return (
   <>
   
   <button onClick={Toggleclick}>Click to change</button>

   <UserStatus users = {user} />
   
   </>
  )
}

export default MainApp
