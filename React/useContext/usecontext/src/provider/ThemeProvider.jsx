import React, { useState } from 'react'
import ThemeContext from '../context/ThemeContext'

const ThemeProvider = ({children}) => {

  const [theme,setTheme] = useState(true)

  const changetheme = ()=>{
    setTheme(!theme)
  }
  return (
    <>
    <ThemeContext.Provider  value={{changetheme,theme}}>
        {children}
          
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
