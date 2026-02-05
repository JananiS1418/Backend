
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import AppLayOut from '../outlets/AppLayOut'
import Banner from '../components/Banner'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

const AppRoute = () => {
  return (
  <>

   <Routes>
    
    <Route element={<AppLayOut/>}>
       <Route path="/" element={<Banner/>} />
    </Route>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>

   </Routes>
  </>
  )
}

export default AppRoute
