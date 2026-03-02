import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data,setData] = useState({email:"",password:""})


  const handleChange = (e) =>{

    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    try {

      e.preventDefault()

    const checkdata = await axios.post("http://localhost:5000/api/route/check",data)

    alert(checkdata.data.msg)
    alert(checkdata.data.token)

    setData({email:"",password:""})
      
    } catch (error) {

      console.log(error.response.data.msg);
      
      
    }
  }




  return (
    <>
    
     <div>
      <form onSubmit={handleSubmit}>

         <input type="email" name='email' placeholder='Enter the email' value={data.email} onChange={handleChange} />
          <input type="password" name='password' placeholder='Enter the password' value={data.password} onChange={handleChange} />
          <input type="submit" value={"Register"} />
      </form>
     </div>
    </>
  )
}

export default App
