import React from 'react'

const Task3 = ({newdatafunction,userdetails}) => {


  return (
    <div>
        {userdetails.age}
      <button onClick={()=>{newdatafunction(userdetails.age)}} >Check the value</button>
    </div>
  )
}

export default Task3
