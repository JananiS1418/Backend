  import React from 'react'
  import { Route, Routes } from 'react-router-dom'
  import Home from './components/Home'
  import User from './components/User'
import Details from './components/Details'
import Products from './components/Products'

  const App = () => {
    return (
      <>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id"element={<User/>}/>
        <Route path="/products"element={<Products/>}/>
        <Route path="/details"element={<Details/>}/>
      </Routes>
      

      </>
    )
  }

  export default App
