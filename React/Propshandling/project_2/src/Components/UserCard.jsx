import React from 'react'

const UserCard = ({showdata}) => {
    console.log(showdata);
    
  return (
    <>
      
     <div>
        {showdata.name} is {showdata.age} years old from {showdata.city} 

      {showdata.isAdmin ? "Admin" : "No Admin"}
        
     </div>
    
    </>
  )
}

export default UserCard
