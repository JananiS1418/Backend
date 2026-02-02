import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Home = () => {

    const {theme} = useContext(ThemeContext)
  return (
    <>
    <div className={theme?'bg-amber-700 h-80 text-white flex justify-center items-center':"bg-purple-950 text-white flex justify-center h-80 items-center"}>
        Home
    </div>
    
    </>
  )
}

export default Home
