import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex justify-center items-center">
      <div className="bg-blue-200 rounded-2xl p-8 w-100">
        
        <form className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2 ">
            <label className='text-2xl'>Enter Your Name</label>
            <input
              className="bg-white text-black p-2 rounded"
              type="text"
              placeholder="Enter your name"
            />
          </div>

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

          
          <div className="flex justify-center">
            <button className="bg-black text-white  rounded w-20 p-1 text-2xl">
              Login
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
