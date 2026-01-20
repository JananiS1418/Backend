import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const navigate = useNavigate()

    const data = {id:1,name:"mobile",price:"30000"}
    const handleclick = ()=>{
        navigate("/details",{state:data})
    }
    
  return (
    <>
    <div>
        <h1>Product Page</h1>
        <button onClick={handleclick}>View details</button>
    </div>
    </>
  )
}

export default Products
