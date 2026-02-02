import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

const NavBar = () => {

    const{changetheme,theme} = useContext(ThemeContext)
  return (
    <>

    <div className={theme?'bg-amber-950 text-white flex p-4 justify-between items-center':"bg-blue-950 text-white flex p-4 justify-between items-center"}>
        <div>
            Logo
        </div>
        <div className='flex justify-center items-center gap-10'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <button onClick={changetheme} className='bg-white text-black w-20 rounded p-1'>{theme?"Light":"Dark"}</button>
        </div>
    </div>
    </>
  )
}

export default NavBar
