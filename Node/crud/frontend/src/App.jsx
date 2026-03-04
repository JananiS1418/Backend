import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const[formdata,setFormdata] = useState({name:"",email:"",age:""})
  const[storedata,setStoredata] = useState([])
  const[edit,setEdit] = useState("")

  const handleChange = (e)=>{

    setFormdata({...formdata,[e.target.name]:e.target.value})
  }



  const fetchdata = async()=>{

    try {

      const fetch = await axios.get("http://localhost:5000/api/crud/get")

      setStoredata(fetch.data.getdatas)
      
    } catch (error) {

      alert(error.response.data.msg)
      
    }
  }

  useEffect(()=>{
    (async()=>{
      fetchdata()

    })()
  },[])

  const handleAdd =async(e)=>{

    e.preventDefault()

    try {

      const adddata = await axios.post("http://localhost:5000/api/crud/insert",formdata)

      alert(adddata.data.msg)
      setFormdata({name:"",email:"",age:""})
      
    } catch (error) {
      
      alert(error.response.data.msg)
      
    }
  }

  const handleEdit =async (user)=>{

    setFormdata({name:user.name,email:user.email,age:user.age})
       setEdit(user._id)



  }

  const handleUpdate = async(e)=>{

    e.preventDefault()

    try {

      const update = await axios.put(`http://localhost:5000/api/crud/update/${edit}`,formdata)

      alert(update.data.msg)
      setFormdata({name:"",email:"",age:""})
      setEdit("")
      fetchdata()
      
    } catch (error) {

      alert(error.response.data.msg)
      
    }

  }

  const handleDelete = async(userid)=>{

    try {

      const deletedata = await axios.delete(`http://localhost:5000/api/crud/delete/${userid}`)

      alert(deletedata.data.msg)

      fetchdata()
      
    } catch (error) {

      alert(error.response.data.msg)
      
    }

  }
   

  return (
    <>

    <div>
      <form>
        <input type="text" name='name' value={formdata.name} placeholder='Enter the name' onChange={handleChange}  />
        <input type="email" name='email' value={formdata.email} placeholder='Enter the email' onChange={handleChange}  />
        <input type="number" name='age' value={formdata.age} placeholder='Enter the age' onChange={handleChange}  />
        {edit?<button onClick={handleUpdate}>Update</button>:<button onClick={handleAdd}>Add</button>}
        
        
      </form>
    </div>
    

    <div>
      <table border={5}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {storedata.map((e,i)=>(
            <tr key={i}  >
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.age}</td>
            <td><button onClick={()=>handleEdit(e)}>Edit</button> || <button onClick={()=>handleDelete(e._id)}>Delete</button></td>
          </tr>

          ))}
          
        </tbody>
      </table>
    </div>
    
    
    </>
  )
}

export default App
