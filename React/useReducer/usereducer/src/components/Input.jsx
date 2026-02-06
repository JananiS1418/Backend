import React, { useReducer } from 'react'

const initialvalue = {
    name:"",
    email:"",
    password:"",submitted:false
} 

const inputReducer = (state,action) =>{


   if(action.type==="SET_NAME"){

   return {...state, name:action.payload }

   }
     if(action.type==="SET_EMAIL"){

   return {...state, email:action.payload }

   }
     if(action.type==="SET_PASSWORD"){

   return {...state, password:action.payload }

   }if(action.type === "BUTTON"){
    return{...state,submitted:true}
   }

return state


}

const Input = () => {

    const[input,inputDispatch] = useReducer(inputReducer,initialvalue)
  return (
    <>  
    <div className='bg-cyan-900 text-white flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center p-5 gap-4'>
        <h1>Input Field</h1>
        <input type="text" className='bg-white text-black w-40 p-1 rounded' value={input.name} onChange={(e)=>inputDispatch({type:"SET_NAME",payload:e.target.value})} placeholder='Enter Your name' />
        <input type="text" className='bg-white text-black w-40 p-1 rounded' value={input.email} onChange={(e)=>inputDispatch({type:"SET_EMAIL",payload:e.target.value})} placeholder='Enter your email' />
        <input type="text"className='bg-white text-black w-40 p-1 rounded' value={input.password} onChange={(e)=>inputDispatch({type:"SET_PASSWORD",payload:e.target.value})} placeholder='Enter your password' />
        <button onClick={()=>inputDispatch({type : "BUTTON"})}>Click</button>
    </div>


    {input.submitted && (
  <div>
    <h1>{input.name}</h1>
    <h1>{input.email}</h1>
    <h1>{input.password}</h1>
  </div>
)}

        

    </div>
    

    </>
  )
}

export default Input
