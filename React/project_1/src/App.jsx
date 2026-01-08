import { Route, Routes } from "react-router-dom"
import ProfileCardFn from "./Components/ProfileCardFn"
import RenderingPlayground from "./Components/RenderingPlayground"

import MainApp from "./Components/MainApp"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"
import './App.css'

const App = ()=>{
  return (

    <>
       <Navbar/>
       
       <ProfileCardFn/>
       <RenderingPlayground/>
       <MainApp/>
       <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/About" element={<About/>}  />
        <Route path="/Contact" element={<Contact/>}  />
       </Routes>
       

       
       
      
    
    </>
  )
}

export default App