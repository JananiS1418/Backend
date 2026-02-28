// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// const App = () => {

//   const [formdata,setFormData] = useState({email:"",password:""})
//   const [savedata,setSaveData] = useState([])
//  const handleChange = (e)=>{

//   setFormData({...formdata,[e.target.name]:e.target.value})

//  }


//  const handleSubmit = async(e)=>{

//      e.preventDefault()

//      try {

//      const res = await axios.post("http://localhost:5000/api/login/checklogin",formdata)
    
//      console.log(res);

//      alert(res.data.msg)
//      setFormData({email:"",password:""})
      
//      } catch (error) {

//       //console.log('error',error);

//        alert(error.response.data.msg)
      
      
//      }

//  }




//  useEffect(()=>{


//   const fecthdata = async()=>{

//     const datafetch = await axios.get("http://localhost:5000/api/login/getlogdatas")
//      console.log(datafetch.data.getdatas);

//      setSaveData(datafetch.data.getdatas)
     
//   }

//   fecthdata()

//  },[])

//   return (
//     <>
    
//     <div>
//       <form onSubmit={handleSubmit}>

         
//           <input type="email" name="email" value={formdata.email} placeholder='enter teh email' onChange={handleChange} />
      
//        <input type="password" name="password" value={formdata.password} placeholder='enter teh name' onChange={handleChange} />
//        <input type="submit" value={"Register"} />
//       </form>
//     </div>



//     {savedata.map((e)=>(


// <div key={e._id}>

//   <h1>{e.name}</h1>
// <p>{e.email}</p>
// </div>

//     ))}
//     </>
//   )
// }

// export default App


import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data,setData] = useState({userEmail:"",userPassword:""})
  const [save,setSave] = useState([])
 
   const handleChange = (e)=>{

     setData({...data,[e.target.name]:e.target.value})
   }

   const handleSubmit =async (e)=>{

          e.preventDefault()

      try {

        const datashow = await axios.post("http://localhost:5000/api/use/check",data)

        console.log(datashow);
        alert(datashow.data.msg)
        
        
        setData({userEmail:"",userPassword:""})
        
      } catch (error) {
        console.log("error",error.response.data.msg);

        
        
      }    

   }

   useEffect(()=>{

    const fetchdata = async()=>{

      const datas = await axios.get("http://localhost:5000/api/use/get")

      setSave(datas.data.getdatas)
    }

    fetchdata()


   },[])

  return (
    <>
     <div>
      <form onSubmit={handleSubmit} >

        {/* <input type="text" name='userName' value={data.userName} placeholder='Enter the name' onChange={handleChange} />
        <input type="number" name='userAge' value={data.userAge} placeholder='Enter the age' onChange={handleChange} /> */}
        <input type="email" name='userEmail' value={data.userEmail} placeholder='Enter the email' onChange={handleChange} />
        <input type="password" name='userPassword' value={data.userPassword} placeholder='Enter the password' onChange={handleChange} />

        <input type="submit" value={"Register"} />
      </form>
     </div>

     {save.map((e)=>(
      <div key={e._id}>
        <h1>{e.userName}</h1>
        <p>{e.userAge}</p>
        <p>{e.userEmail}</p>


         
      </div>
     ))}
    
    
    </>
  )
}

export default App
