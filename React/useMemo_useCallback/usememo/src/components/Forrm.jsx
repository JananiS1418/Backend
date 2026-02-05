import React, { useCallback, useState } from 'react'
import Input from '../components/Input'

const Forrm = () => {
    const [values,setValues] =  useState("")

    const  handleChange = useCallback((e)=>{
        setValues(e.target.value)

    },[])
  return (
    <>
    <div className='bg-purple-900 justify-center items-center text-white flex flex-col p-3 '>
        <p>{values}</p>
        <Input changevalues={handleChange} />

    </div>
    </>
  )
}

export default Forrm
