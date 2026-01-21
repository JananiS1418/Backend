import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Count from '../components/Count'
import Show from '../components/Show'

const AppRoute = () => {
  return (
    <>
    
    <Routes>

        <Route path="/" element={<Home/>} />
        {/* <Route path="/count" element={<Count/>} />
        <Route path="/show" element={<Show/>} /> */}
    </Routes>
    </>
  )
}

export default AppRoute
