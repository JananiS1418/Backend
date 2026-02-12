
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'

import AppLayOut from '../outlets/AppLayOut'
import Banner from '../components/Banner'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'

import AdminLayout from '../outlets/AdminLayout'
import Products from '../components/Products'
import ShowCatogery from '../components/ShowCatogery'
import ProtectedRoute from './ProtectedRoute'


const AppRoute = () => {
  return (
    <>

      <Routes>

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayOut />}>
            <Route path="/" element={<Banner />} />
          </Route>

          <Route path="/" element={<AdminLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<ShowCatogery />} />
            <Route path="/products" element={<Products />} />

          </Route>
        </Route>


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



      </Routes>
    </>
  )
}

export default AppRoute
