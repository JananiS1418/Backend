import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const[role,setRole] = useState("")
  const handleClick = (e)=>{
    e.preventDefault()
    navigate("/register")

  }

  const clickLogin = ()=>{
    
    if(role === "Customer"){
      navigate("/")


    }else if(role === "Admin"){
      navigate("/dashboard")
    }else{
      alert("Please Select Your role")
    }
  }


  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-blue-200 rounded-2xl p-8 w-100">
        
        <form className="flex flex-col gap-6">
          
          

          <div className="flex flex-col gap-2 ">
            <label className='text-2xl'>Enter Your Email</label>
            <input
              className="bg-white text-black p-2 rounded"
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="flex flex-col gap-2 ">
            <label className='text-2xl'>Enter Your Password</label>
            <input
              className="bg-white text-black p-2 rounded"
              type="password"
              placeholder="At least 8 characters"
            />
          </div>
          <div className='flex  flex-col gap-2'>
            <label className='text-2xl'>Enter Your Role</label>
            <div className="flex flex-col gap-2  bg-white text-black p-2 rounded">
            
            <select value={role} onChange={(e) => setRole(e.target.value)} >
              <option   selected disabled value="">Select your role</option>
              <option value="Customer">Customer</option>
              <option value="Admin">Admin</option>
            </select>
            
          </div>

          </div>
          

          
          <div className="flex justify-center">
            <button onClick={clickLogin} className="bg-black text-white  rounded w-20 p-1 text-2xl">
              Login
            </button>


          </div>
           <div className='flex justify-center items-center'>
            <p>Don't have an account,</p>
            <button onClick={handleClick} className='text-red-600'>Register here</button>
           </div>
        </form>
      </div>
    </div>
  )
}

export default Login
