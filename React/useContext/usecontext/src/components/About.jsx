import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const About = () => {

    const {theme} = useContext(ThemeContext)
  return (
    <>
    <div className={theme?'bg-cyan-950 text-white h-80 flex justify-center items-center':"bg-amber-950 text-white h-80 flex justify-center items-center"}>
        About
    </div>
    </>
  )
}

export default About
