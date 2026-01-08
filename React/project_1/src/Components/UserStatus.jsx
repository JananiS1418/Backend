import React from 'react'

const UserStatus = ({users}) => {

 if (users === null) {
    return <p>Loading user…</p>;
  }
   


  return (
    <div>
      {/* <h1>{users??"Loading Users..."}</h1> */}


      <p>{users?.name??"Guest User"}</p>
      <p>{users?.email??"No email Provied"}</p>


      <h1>{users?.isActive && "Active User"}</h1>
    </div>
  )
}

export default UserStatus
