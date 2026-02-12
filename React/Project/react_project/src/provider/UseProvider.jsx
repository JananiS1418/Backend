import React, { useState, useEffect } from 'react'
import CountContext from '../context/CountContext'




const UseProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)

    const auth = localStorage.getItem("auth")
    if (auth === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem("auth", "true")
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("auth")
  }

  const count = cart.length

  return (
    <>
      < CountContext.Provider value={{ addToCart, cart, count, login, logout, isAuthenticated }}>

        {children}
      </ CountContext.Provider>


    </>
  )
}

export default UseProvider
