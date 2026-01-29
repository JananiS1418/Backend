import React, { useEffect, useState } from 'react'

const Display = () => {

    const[data,setData]= useState([])
     
     const fetchdatas = async()=>{
        try {
            const showdata = await fetch("https://dummyjson.com/recipes?limit=5")
             const datas = await showdata.json()
             setData(datas.recipes)

            
        } catch (error) {
              setData("Something went Wrong",error)
            
        }
     }

     useEffect(()=>{
        fetchdatas()
     },[])

  return (
    <>
       <h1 className='bg-black text-white text-center text-2xl'>Display on the Screen</h1>
      <div className='bg-black h-100 P-3  text-white flex gap-10 justify-center items-center'>
        
        {data.map((e)=>(
            <div className='bg-white text-black  flex flex-col justify-center items-center gap-3 mt-2 ' key={e.id}>
                <h1>{e.name}</h1>
                <img className='h-60 w-60 P-2' src={e.image} alt="" />
                <p>{e.cuisine}</p>
            </div>
        ))}
      </div>
    
    
    </>
  )
}

export default Display

