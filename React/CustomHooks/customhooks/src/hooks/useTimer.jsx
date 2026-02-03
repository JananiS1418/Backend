import  { useEffect, useState } from 'react'

const useTimer = (initialvalue= 0) => {

    const[time,setTime] = useState(initialvalue)

    useEffect(()=>{
      const seconds =   setInterval(()=>{
          setTime(prev=>prev+1)
        },1000)

        return()=>clearInterval(seconds)
    },[])
  return {time}
}

export default useTimer
