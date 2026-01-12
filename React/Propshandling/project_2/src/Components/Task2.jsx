import React from 'react'
import Task3 from './Task3';

const Task2 = ({userdata,functiondata}) => {

    //console.log(userdata);
    
  
    const filterdatas = userdata.filter((e)=>e.age===21)

   console.log(filterdatas);
   


  return (
    <div>
      {filterdatas.map((e,i)=>(
            <Task3 key={i} userdetails ={e} newdatafunction = {functiondata} />
      ))} 
     


    </div>
  )
}

export default Task2
