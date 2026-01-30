import React, { useRef } from 'react'

const Form = () => {
    const  nameref = useRef(null)
    const emailref= useRef(null)
    const dataref = useRef(null)
    const showref = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
       const data =  nameref.current.value
       dataref.current.innerText = data
        const datas = emailref.current.value
        showref.current.innerText = datas

    }
  return (
    <>
    <div className='bg-lime-900 text-white flex h-100 flex-col justify-center items-center gap-4 mt-2'>
        <h1 className='text-2xl'>Form with name and email</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5 justify-center items-center'>
            <input ref={nameref} className='bg-lime-300 text-black p-2 rounded' type="text" placeholder='Enter your name' />
            <input ref={emailref} className='bg-lime-300 text-black p-2 mb-4 rounded' type="text" placeholder='Enter your email'/>
            <button type="submit" className='bg-white text-black p-1 w-30 '>Submit</button>
            <div className='bg-lime-600 text-white w-50 h-20 mb-3 text-center p-2'>
                <p ref={dataref}></p>
            <p ref={showref}></p>

            </div>
            
        </form>
    </div>
    </>
  )
}

export default Form
