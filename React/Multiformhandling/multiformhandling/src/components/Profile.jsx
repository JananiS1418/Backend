import { useState } from "react"



const Profile = () => {

   const [profile,setProfile] = useState({name:"Janani",email:"jananisom14@gmail.com",city:"chennai"})
   const [data,setData]= useState({})
    
   const handleProfile = (e)=>{
    const datas = e.target.value
    const showdatas = e.target.name
       setProfile({...profile,[showdatas]:datas})

   }

   const dataSubmit = (e)=>{
       e.preventDefault()
       setData(profile)
       alert("Profile Updated successfully")

   }

  return (
    <>
     <div className='bg-lime-900 text-white flex h-200  flex-col justify-center items-center'> 
        <h1 className='text-3xl'>Student Profile</h1>
        <form onSubmit={dataSubmit} >
        <div className='bg-white p-2 text-black flex flex-col gap-10 h-110 w-150 mt-3'>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
            <label>Enter Your Name :</label>
            <input  onChange={handleProfile} value={profile.name} name='name' className='border-2 rounded w-75' type="text" placeholder='Enter in Capital Letter' />
            

            </div>
            <div className='text-2xl flex justify-center items-center rounded gap-5 mt-4 '>
                <label>Enter Your Email :</label>
            <input onChange={handleProfile} value={profile.email} name='email' className='border-2 rounded w-75' type="text" placeholder='Enter  adcd123@gmail.com' />

            </div>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
                <label>Enter Your City : </label>
            <input onChange={handleProfile} value={profile.city} name='city' className='border-2 rounded w-75' type="text" placeholder='Enter in Capital Letter' />

            </div>
            
            <div className='bg-black text-white w-20 p-2 rounded ml-60 text-center '>
                <input type="submit" value="Register" />
            </div>
            
        </div>
        </form>

        {data.name && (
                <div className='mt-2 bg-lime-300 text-black p-6 rounded-lg shadow-md w-80'>
                 <h2 className='text-xl font-bold mb-4 text-center'>Profile Details</h2>
                 <div className='space-y-2 text-center'>
                    <p><span className='font-semibold'>Name:</span> {data.name}</p>
                    <p><span className='font-semibold'>Email:</span> {data.email}</p>
                    <p><span className='font-semibold'>City:</span> {data.city}</p>
                  
                 </div>
                </div>
           )}


         

     </div>
    
    </>
  )
}

export default Profile
