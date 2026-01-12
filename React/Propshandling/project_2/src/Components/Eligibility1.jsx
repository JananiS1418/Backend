import React from 'react'
import Eligibility2 from './Eligibility2'

const Eligibility1 = () => {

    const showuserdetails = [{name:"Janu", age:22},{name:"saritha", age:17},{name:"Abi",age:23},{name:"monish",age:16}]
    const datafunction = (users)=>{
        if(users.age>=18){
          alert(`${users.name} is eligibility`)
        }else{
            alert(`${users.name} is not eligibility`)
        }
        
    }
  return (
    <>
    <div>
        <Eligibility2 getuserdetails = {showuserdetails} getfunction = {datafunction}/>
      
    </div>
    
    </>
    
  )
}

export default Eligibility1
