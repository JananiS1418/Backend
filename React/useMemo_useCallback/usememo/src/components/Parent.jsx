import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[count,setCount] = useState(0)
    const [theme,setTheme] = useState(true)

    const increment = useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <>
    <div className='bg-blue-950  text-white flex flex-col gap-3  justify-center items-center  p-5  mt-2'>
       <h1 >{count}</h1>
       <Child increment = {increment}/>
    </div>

    <div className={theme?"bg-pink-400  text-black p-10 flex justify-center items-center mt-2":"bg-purple-300 flex justify-center items-center text-white p-10 mt-2"} >
        <button className='bg-white text-black p-2 w-50' onClick={()=>setTheme(!theme)}>Change Theme</button>
      </div>
    </>

  )
}

export default Parent
