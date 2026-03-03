import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>
        <div>
            Logo
        </div>
        <div>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
