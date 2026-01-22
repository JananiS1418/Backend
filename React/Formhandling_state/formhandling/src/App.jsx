import React, { useState } from 'react'

const App = () => {
  const[value,setValue]= useState([])
  const[button,setButton] = useState("")
  const [show,setShow] = useState("")
  const [even,setEven] = useState([])
  const [odd,setOdd] = useState()
  const [numbers,setNumbers] = useState([])

  const handlechange = (e)=>{
    const data = e.target.value
    setValue(data)
    
  }

  const handleClick = ()=>{
    setButton(value)

  }
  
  const showvalue = ()=>{
    if(value>=18){
      setShow("Eligible")
    }
    else{
      setShow("Not Eligible")
    }
  }
  const showeven = ()=>{
     const changearray = [...value]
     const datas = changearray.filter((n)=>n%2 === 0)
     console.log(datas);
     
     setEven(`Even numbers - ${datas}`)
} 

 const showodd = ()=>{
  if(value %2 != 0){
    setOdd("Not an even Number")
  }
  else{
    setOdd("Even Number")
  }
 }

 const shownumber = ()=>{
   const showarray= [...value]
   setNumbers(showarray)
 }
  

  
   return (
    <>
      <div className='bg-blue-950 text-white h-200 flex flex-col justify-center items-center'>
            <h1 className='text-3xl '>Form handling</h1>
         <div className='bg-white text-black h-180 w-100 mt-4 rounded-3xl' >
          
          <input onChange={handlechange} type="number" className='mt-7 ml-28 bg-black text-white rounded text-center ' placeholder='Enter the Number' />
         

          <div className='bg-amber-900 w-70 text-center h-15 text-white ml-15 rounded'>
          <p  className='text-center mt-3'>Show the Values</p>
          <p className='text-center'>{value}</p>
         </div>

         <div className='bg-blue-400 rounded mt-2 w-70 text-center h-20 ml-15'>
          <p className='text-center '>Button Click to show the data</p>
          <button onClick={handleClick} className='bg-gray-500 ml-6 w-30 rounded text-center text-white'>Click to check</button>
          <p>{button}</p>
         </div>

         <div className='bg-fuchsia-700 rounded mt-2 w-70 text-center h-20 ml-15'>
          <p>Validation</p>
          <button  onClick={showvalue}className='bg-white text-black w-13 rounded'>Show</button>
          <p>{show}</p>
         </div>

         <div className='bg-gray-700 text-white rounded mt-2 w-70 text-center h-22 ml-15' >
          <p>Even Number</p>
          <button onClick={showeven} className='bg-white text-black w-30  rounded'>Check Even</button>

          <p>{even}</p>
         </div>

         <div className='bg-cyan-700 text-white rounded mt-2 w-70 text-center h-22 ml-15'>
             <p>Odd Number</p>
             <button className='bg-black text-white w-20' onClick={showodd}>Click Odd</button>
             <p>{odd}</p>
         </div>

          <div  className='bg-lime-800 text-white rounded mt-2 w-70 text-center h-35 ml-15'>
            <p>Enter the Number</p>
            <button  className='bg-white text-black w-30'onClick={shownumber}>Show Number</button>
             {numbers.map((e,i)=>(
              <p key={i}>{e}</p>
             ))}
          </div>

 
         </div>
         
      </div>
    </>
  )
}

export default App
