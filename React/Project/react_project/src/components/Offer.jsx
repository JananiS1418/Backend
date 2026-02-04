import React from 'react'
import Footer from './Footer'
import image from '../assets/images/offer1.jpg'

const Offer = () => {
  return (
    <>
     <div className='bg-pink-700 flex rounded   justify-between items-center  text-black h-80  '>
        <div className='flex  flex-col gap-4'>
            <h1 className='text-5xl text-center  text-white rounded ml-15 bg-pink-500 w-130 p-2 '>Fresh Deals Every Day</h1>
            <h2 className='text-3xl text-white ml-35  '>Only at JM Maligaii !!!!!!!......</h2>
            <h4 className='text-2xl text-green-900 ml-40'>Exclusive Offer!!</h4>
        </div>
        <div>
            <img src={image} className='w-90 rounded h-60 mr-60' alt="" />
            <p></p>
        </div>
     </div>
     <div> 
        <Footer/>
     </div>
    
    </>
    
  )
}

export default Offer
