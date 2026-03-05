import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  const[name,setName] = useState("")
  const [file,setFile] = useState(null)
  const [save,setSave] = useState([])


  const handleClick = async(e)=>{

    e.preventDefault()

    try {

      const formdata = new FormData()

      formdata.append("name",name)
      formdata.append("image",file)

      const addimage = await axios.post("http://localhost:5000/api/multer/uploaddata",formdata)

      alert(addimage.data.msg)
      fetchdata()
      
    } catch (error) {

      alert(error.response.data.msg)
      
    }}

  const fetchdata = async()=>{

      const get = await axios.get("http://localhost:5000/api/multer/get")

      setSave(get.data.getdatas)
    }

    

    useEffect(()=>{
      (async()=>{
        fetchdata()
      })()
    },[])
  return (
    <>
    
    <div>
      <input type="text" placeholder='Enter the name' onChange={(e)=>setName(e.target.value)} />
      <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
      <button onClick={handleClick}>Upload</button>
    </div>

    {save.map((e)=>(
      <div key={e._id}>
      <h1>{e.name}</h1>
      <img src={`http://localhost:5000/${e.image}`} width={200} />
    </div>


    ))}


    
    
    </>
  )
}

export default App
