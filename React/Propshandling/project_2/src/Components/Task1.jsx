import { useState } from "react"
import Task2 from "./Task2"


const Task1 = () => {

    const datas = [{name:"Abi",age:23},{name:"Janu",age:22},{name:"Saritha",age:21}]
    
    const userinfo = (users)=>{

        alert(users)

    }
  return (
    <>
       <div>
          <Task2 userdata = {datas} functiondata={userinfo}  />
       </div>
    
    </>
  )
}

export default Task1
