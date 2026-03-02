import React, { useState, useEffect } from 'react'
import CountContext from '../context/CountContext'




const UseProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCart(storedCart)

    const storedUser = JSON.parse(localStorage.getItem("user"))
    if (storedUser && storedUser.token) {
      setIsAuthenticated(true)
      setUser(storedUser)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const login = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
  }

  const logout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem("user")
  }

  const count = cart.length

  return (
    <>
      < CountContext.Provider value={{ addToCart, cart, count, login, logout, isAuthenticated, user }}>

        {children}
      </ CountContext.Provider>


    </>
  )
}

export default UseProvider
