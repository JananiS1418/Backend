import React from 'react'
import useFetch from '../hooks/useFetch'

const Fetch = () => {
    const {data} = useFetch("https://dummyjson.com/users?limit=5")

  return (
    <>
     <div className='bg-lime-800 flex mt-2 flex-col justify-center items-center gap-3 text-white'>
        <h1 className='text-2xl'>Fetch users from an API</h1>
        {data.map((e)=>(
            <div className='flex mb-3 gap-3' key={e.id}>
                <p>{e.firstName}</p>-
                <p>{e.age}</p>

                </div>
        ))}
     </div>
    </>
  )
}

export default Fetch
