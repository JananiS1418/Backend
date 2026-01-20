import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <h1>Home Page</h1>
    <Link to="/user/101">Go to User</Link>
    
    </>
  )
}

export default Home
