import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const Register = () => {

    const [datas,setData] = useState({name:"",email:"",password:""})


    const handlechange  = (e)=>{

        setData({...datas,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{

        try {
            e.preventDefault()

            const storedata = await axios.post("http://localhost:5000/api/route/create",datas)
             
              alert(storedata.data.msg)

        } catch (error) {

            alert(error.response.data.msg)
            
        }


    }


  return (
    <>
     <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Enter the name' value={datas.name} onChange={handlechange} />
            <input type="email" name='email' placeholder='Enter the email' value={datas.email} onChange={handlechange} />
            <input type="password" name='password' placeholder='Enter the password' value={datas.password} onChange={handlechange} />
            <input type="submit" value={"Register"} />

        </form>
     </div>
    
    </>
  )
}

export default Register
