import React from 'react'
import Eligibility3 from './Eligibility3'

const Eligibility2 = ({getuserdetails,getfunction}) => {
    const getdetails = getuserdetails.filter((e)=>e.age)

    console.log(getdetails);
    

  return (
    <>
    <div>
      {getdetails.map((e,i)=>(
         <Eligibility3  key={i} filtereddetails={e}  functiondata = {getfunction} />
      ))}
    </div>
  
    
    </>
  )    
}


export default Eligibility2
