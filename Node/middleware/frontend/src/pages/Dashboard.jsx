import React from 'react'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const Dashboard = () => {
const [showingdata, setShowingData] = useState("")
  const navigate = useNavigate()

  const token = localStorage.getItem("token")
console.log(token);

  if(!token) {
    alert("Something error")
    navigate("/")
  }

  useEffect(()=>{

    const fecthdata = async()=>{

      const datasave = await axios.get("http://localhost:5000/api/route/dashboartnew",{headers:{Authorization:token}})
     
      console.log(datasave);
      
    setShowingData(datasave.data)

    }

    fecthdata()

  },[])
  return (
    <>
    <Navbar/>
    <h1>{showingdata.name}</h1>
     <h1>{showingdata.id}</h1>
    </>
  )
}

export default Dashboard
