
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'

import AppLayOut from '../outlets/AppLayOut'
import Banner from '../components/Banner'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Categories from '../components/Categories'
import AdminLayout from '../outlets/AdminLayout'

const AppRoute = () => {
  return (
  <>

   <Routes>
    
    <Route element={<AppLayOut/>}>
       <Route path="/" element={<Banner/>} />
    </Route>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>


 <Route path="/" element={<AdminLayout/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
        </Route>
   </Routes>
  </>
  )
}

export default AppRoute
