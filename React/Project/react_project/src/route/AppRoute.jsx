
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import NavBar from '../components/NavBar'
import AppLayOut from '../outlets/AppLayOut'
import Banner from '../components/Banner'

const AppRoute = () => {
  return (
  <>

   <Routes>
    
    <Route element={<AppLayOut/>}>
       <Route path="/" element={<Banner/>} />
    </Route>
  <Route path="/login" element={<Login/>}/>
   </Routes>
  </>
  )
}

export default AppRoute
