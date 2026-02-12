import React, { useEffect, useState } from 'react'

const Category = () => {

      const [category,setCategory] = useState({catname:"",catstatus:""})

      const [savedata,setSavedata] = useState([])

      const [showdata,setShowdata] = useState([])
    
 const handleChange =(e)=>{
    setCategory({...category,[e.target.name]:e.target.value})

 }
  
  const handleClick = (e)=>{
   
       e.preventDefault()

       const getdata = localStorage.getItem("categorydata")

       const changedata = getdata ?JSON.parse(getdata) : []

       const storedata = {
        id:changedata.length+1,
        catname:category.catname,
        catstatus:category.catstatus

       }

       changedata.push(storedata)

       localStorage.setItem("categorydata",JSON.stringify(changedata))

  setSavedata(changedata)
  alert("Data saved ")
  setCategory({catname:"",catstatus:""})
 






  }
  
  useEffect(()=>{

     const showdata  = ()=>{


         const getshowdata = localStorage.getItem("categorydata")


         const showchangedata  = JSON.parse(getshowdata)


       setShowdata(showchangedata)
        
     }
     showdata()
     
  },[savedata])


  const handleDelete = (id)=>{

       const data  = localStorage.getItem("categorydata")

        const deletedatachange  = JSON.parse(data)

        const filtered = deletedatachange.filter((e)=> e.id !== id)

        alert("delete the data")

        localStorage.setItem("categorydata",JSON.stringify(filtered))

        setSavedata(filtered)
        setShowdata(filtered)






        


  }


  return (
    <>
    <form  className='flex gap-2'>
        <input onChange={handleChange} value={category.catname} name='catname' type="text" placeholder='enter category ' className='bg-black text-white p-2 mt-2 rounded ' />
        <select onChange={handleChange} value={category.catstatus} name='catstatus' className='bg-black text-white p-2 mt-2 rounded' >
            <option selected disabled value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleClick} className='bg-black text-white p-2 rounded mt-2 w-20'>Add</button>
    </form>

     <table className='border-2 w-100 h-60 mt-3 '>
        <thead>
            <tr >
                <th className='border-2'>ID</th>
                <th className='border-2' >Category</th>
                <th className='border-2'>Status</th>
                <th className='border-2'>Action</th>
            </tr>
        </thead>

        <tbody>

            {showdata.map((e)=>(
                <tr  key={e.id}>
                <td className='border-2'>{e.id}</td>
                <td className='border-2'>{e.catname}</td>
                <td className='border-2'>{e.catstatus}</td>
                <td  className='border-2' >
                    <button onClick={()=>handleDelete(e.id)} className='bg-red-700 text-white w-15  p-1 rounded' >Delete</button>
                </td>
            </tr>

            ))}
            
        </tbody>
     </table>
    </>
  )
}

export default Category
