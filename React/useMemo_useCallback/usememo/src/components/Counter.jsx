import { useMemo, useState } from 'react'

const Counter = () => {

    const [data,setData] = useState(0)
    const [theme,setTheme] = useState(true) 

    const heavyloop = (value)=>{
        
        for(let i=0;i<=1000;i++){
            console.log(i);
            

        }
        return value+1
    }

    const datas = useMemo(()=>heavyloop(data),[data])

     
  return (
    <>
      <div className='bg-amber-900 text-white gap-2 p-10 flex flex-col justify-center items-center'>
        <h2>{datas}</h2>
        <button className='bg-white text-black w-20 p-1' onClick={()=>setData(data+1)}>Count</button>
      </div>
      <div className={theme?"bg-black  text-white p-10 flex justify-center items-center mt-2":"bg-amber-700 flex justify-center items-center text-white p-10 mt-2"} >
        <button className='bg-white text-black p-2 w-50' onClick={()=>setTheme(!theme)}>Change Theme</button>
      </div>
    
    
    </>
  )
}

export default Counter
