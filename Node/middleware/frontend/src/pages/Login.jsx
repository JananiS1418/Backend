import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {

     const [datas,setData] = useState({name:"",email:"",password:""})
   
     const navigate = useNavigate()

    const handlechange  = (e)=>{

        setData({...datas,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{

        try {
            e.preventDefault()

            const storedata = await axios.post("http://localhost:5000/api/route/login",datas)
             
            //   alert(storedata.data.msg)
            //   alert(storedata.data.token)

            localStorage.setItem("token",storedata.data.token)
           
            setData({name:"",email:"",password:""})
            
            
navigate("/dashboard")

        } catch (error) {

            alert(error.response.data.msg)
            
        }


    }
  return (
    <>
    <div>
        <form  onSubmit={handleSubmit}>
           
            <input type="email" name='email' placeholder='Enter the email' value={datas.email} onChange={handlechange} />
            <input type="password" name='password' placeholder='Enter the password' value={datas.password} onChange={handlechange} />
            <input type="submit" value={"Login"} />

        </form>
     </div>
    
    </>
  )
}

export default Login
