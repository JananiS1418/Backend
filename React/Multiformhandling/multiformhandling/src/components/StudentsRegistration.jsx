import  { useState } from 'react'

const StudentsRegistration = () => {
   
     const [data,setData] = useState({name:"",email:"",course:"",age:""})
     const [card,setCard] = useState({})

     const handleChange = (e)=>{
        const showdata = e.target.value
        const storedata = e.target.name

        setData({...data,[storedata]:showdata})
        //console.log(data);
        
     }
      const handleClick = (e)=>{
        e.preventDefault()

        //    setCard(data)

           if(Number(data.age) >= 18){
            setCard(data)
           }else{
            alert("Not Eligible for course")
           }

           setData({name:"",email:"",course:"",age:""})

      }

  return (
    <>
    
     <div className='bg-cyan-900 text-white flex h-200  flex-col justify-center items-center'> 
        <h1 className='text-3xl'>Students Registration</h1>
        <form onSubmit={handleClick} >
        <div className='bg-white p-2 text-black flex flex-col gap-10 h-110 w-150 mt-3'>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
            <label>Enter Your Name :</label>
            <input onChange={handleChange}  value={data.name} name="name" className='border-2 rounded w-75' type="text" placeholder='Enter in Capital Letter' />
            

            </div>
            <div className='text-2xl flex justify-center items-center rounded gap-5 mt-4 '>
                <label>Enter Your Email :</label>
            <input onChange={handleChange}  value={data.email} name="email" className='border-2 rounded w-75' type="text" placeholder='Enter  adcd123@gmail.com' />

            </div>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
                <label>Enter Your Course : </label>
            <input onChange={handleChange} value={data.course} name="course" className='border-2 rounded w-75' type="text" placeholder='Enter in Capital Letter' />

            </div>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
                <label>Enter Your Age : </label>
            <input onChange={handleChange} value={data.age} name="age" className='border-2 rounded w-75' type="number" placeholder='Enter in number' />

            </div>
            <div className='bg-black text-white w-20 p-2 rounded ml-60 text-center '>
                <input type="submit" value="Register" />
            </div>
            
        </div>
        </form>


          {card.name && (
                <div className='mt-2 bg-cyan-200 text-black p-6 rounded-lg shadow-md w-80'>
                 <h2 className='text-xl font-bold mb-4 text-center'>Student Details</h2>
                 <div className='space-y-2 text-center'>
                    <p><span className='font-semibold'>Name:</span> {card.name}</p>
                    <p><span className='font-semibold'>Email:</span> {card.email}</p>
                    <p><span className='font-semibold'>Course:</span> {card.course}</p>
                    <p><span className='font-semibold'>Age:</span> {card.age}</p>
                 </div>
                </div>
           )}

     </div>
    
    </>
  )
}

export default StudentsRegistration
