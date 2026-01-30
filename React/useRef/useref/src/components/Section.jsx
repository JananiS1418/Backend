import React, { useRef } from 'react'
import Text from './Text'
import Background from './Background'
import Focus from './Focus'
import Form from './Form'
import Count from './Count'
import Gettext from './Gettext'

const Section = () => {
    const oneref = useRef()
  const tworef = useRef()
  const threeref = useRef()
  const fourref = useRef()
  const  fiveref = useRef()
  const  sixref = useRef()
  const movetotop = useRef()

  const handleClick = (ref)=>{

    ref.current.scrollIntoView({behavior:"smooth"})

}
  return (
    <>
    
    <div ref={movetotop} className='flex gap-3 mt-2 text-center'>
        <button onClick={()=>handleClick(oneref)} className='bg-black text-white w-30 p-2 '>Section 1 </button>
        <button onClick={()=>handleClick(tworef)} className='bg-black text-white w-30 p-2 '>Section 2 </button>
        <button onClick={()=>handleClick(threeref)} className='bg-black text-white w-30 p-2 '>Section 3 </button>
        <button onClick={()=>handleClick(fourref)} className='bg-black text-white w-30 p-2 '>Section 4 </button>
        <button onClick={()=>handleClick(fiveref)} className='bg-black text-white w-30 p-2 '>Section 5 </button>
        <button onClick={()=>handleClick(sixref)} className='bg-black text-white w-30 p-2 '>Section 6</button>
    </div>

     <div className='mt-2' ref={oneref}>
        <Text/>

     </div>

     <div ref={tworef}>
        <Background/>

     </div>

     <div ref={threeref}>
        <Focus/>

     </div>

     <div ref={fourref}>
        <Form/>

     </div>

     <div ref={fiveref}>
        <Count/>

     </div>

     <div ref={sixref}>
        <Gettext/>
     </div>

     
     <div>
        <button onClick={()=>handleClick(movetotop)} className="bg-black text-white  p-2 w-40 rounded m-3">Move to Top</button>
     </div>


    </>
  )
}

export default Section
