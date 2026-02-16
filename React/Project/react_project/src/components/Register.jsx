import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CountContext from "../context/CountContext"

const Register = () => {

  const navigate = useNavigate()
  const { login } = useContext(CountContext)
  const [role, setRole] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleClick = (e) => {
    e.preventDefault()

    if (name && email && password && role) {
      localStorage.setItem("user", JSON.stringify({ name, email, password, role }))
      navigate("/login")
    } else {
      alert("Please fill all fields")
    }
  }


  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Create Account</h2>

        <form className="flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <label className='text-gray-300 text-sm font-medium ml-1'>Full Name</label>
            <input
              className="bg-gray-800/50 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none transition-all placeholder-gray-500"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-gray-300 text-sm font-medium ml-1'>Select Role</label>
            <div className="relative">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-gray-800/50 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 rounded-lg outline-none appearance-none transition-all cursor-pointer"
              >
                <option disabled value="">Select your role</option>
                <option value="Customer">Customer</option>
                <option value="Admin">Admin</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleClick}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Sign Up
            </button>
          </div>

          <div className='flex justify-center items-center gap-2 mt-2 text-gray-400 text-sm'>
            <p>Already have an account?</p>
            <button onClick={() => navigate("/login")} className='text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-colors'>
              Log in
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register
