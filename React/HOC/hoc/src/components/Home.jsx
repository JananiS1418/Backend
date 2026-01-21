import React from 'react'
import Button from './Button'
import withButton from '../hoc/withButton'


 const Button2 = withButton(Button)
const Home = () => {

   //  const text1 = "This is button 1"
   //  const text2 = "This is button 2"

     const show = ()=>{
        alert("This is button 1")
     }
  return (
    <>
    
     <Button text={"This is button 1"} show={show}/>
     <Button2 text={"This is button 2"} />
     </>
  )
}

export default Home
