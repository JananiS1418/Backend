import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Booking from '../Components/Booking'

const AppRoute = () => {
  return (
    <div>
       <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
      <Route path="/booking" element={<Booking/>}/> 
       </Routes>
    </div>
  )
}

export default AppRoute
