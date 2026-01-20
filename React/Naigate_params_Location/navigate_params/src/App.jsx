  import React from 'react'
  import { Route, Routes } from 'react-router-dom'
  import Home from './components/Home'
  import User from './components/User'

  const App = () => {
    return (
      <>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id"element={<User/>}/>
      </Routes>
      

      </>
    )
  }

  export default App
