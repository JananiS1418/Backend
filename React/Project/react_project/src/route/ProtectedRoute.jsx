import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import CountContext from '../context/CountContext'

const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(CountContext)

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />
}

export default ProtectedRoute
