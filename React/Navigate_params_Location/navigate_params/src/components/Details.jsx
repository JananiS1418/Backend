import React from 'react'
import { useLocation } from 'react-router-dom'

const Details = () => {

    const location = useLocation()
    const details = location.state

    
  return (
    <>
    <div>
        <h1>Details Page</h1>
        <p>Name: {details.name}</p>
        <p>Price :{details.price}</p>
    </div>
    </>
  )
}

export default Details
