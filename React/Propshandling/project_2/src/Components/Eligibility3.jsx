import React from 'react'

const Eligibility3 = ({filtereddetails,functiondata}) => {
  return (
    <>
    <div>
      <p>{filtereddetails.name}</p> 
       <button onClick={()=>{functiondata(filtereddetails)}}>Filtered data</button>
    </div>
    
    </>
    
  )
}

export default Eligibility3
