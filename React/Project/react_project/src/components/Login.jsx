import React, { useContext, useState } from 'react'
import CountContext from '../context/CountContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const { login } = useContext(CountContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    navigate("/register")

  }

  const clickLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json()
        login(data); // data contains _id, name, email, role, token

        if (data.role === "Admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        const errorData = await response.json()
        alert(errorData.message || "Invalid credentials")
      }
    } catch (error) {
      console.error("Error during login:", error)
      alert("Something went wrong")
    }
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Welcome Back</h2>

        <form className="flex flex-col gap-6">

          <div className="flex flex-col gap-2">
            <label className='text-gray-300 text-sm font-medium ml-1'>Email Address</label>
            <input
              className="bg-gray-800/50 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none transition-all placeholder-gray-500"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className='text-gray-300 text-sm font-medium ml-1'>Password</label>
            <input
              className="bg-gray-800/50 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none transition-all placeholder-gray-500"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={clickLogin}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Sign In
            </button>
          </div>

          <div className='flex justify-center items-center gap-2 mt-4 text-gray-400 text-sm'>
            <p>New to our platform?</p>
            <button onClick={handleClick} className='text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-colors'>
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
