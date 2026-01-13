
import { Route, Routes } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails'
import Character from '../components/Character'
import Booking from '../components/Booking'
import RateNow from '../components/RateNow'
import Login from '../components/Login'
import Layout from '../components/Layout'

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route  element={<Layout/>}>
        <Route path="/" element={<MovieDetails/>}  />
      <Route path="/character" element={<Character/>}  />
      <Route path="/booking" element={<Booking/>}  />
      <Route path="/ratenow" element={<RateNow/>}  />
        </Route>
      
      <Route path="/login" element={<Login/>}  />

    </Routes>
    
    
    </>
  )
}

export default AppRouter
