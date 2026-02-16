import React from 'react'
import Footer from './Footer'
import image from '../assets/images/offer1.jpg'

const Offer = () => {
  return (
    <div className='w-full mt-16 mb-10'>
      <div className='w-full h-[400px] rounded-2xl overflow-hidden relative shadow-2xl group'>
        <img
          src={image}
          className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
          alt="Exclusive Offer"
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex flex-col justify-center px-12 md:px-24'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up'>
            Fresh Deals <span className='text-green-400'>Every Day</span>
          </h1>
          <h2 className='text-2xl md:text-3xl text-gray-200 mb-6 font-light tracking-wide'>
            Start your healthy journey with <span className='font-semibold text-yellow-400'>JM Maligai</span>
          </h2>
          <div className='flex items-center gap-4'>
            <span className='bg-red-600 text-white px-6 py-2 rounded-full font-bold text-lg animate-pulse'>
              Exclusive Offer
            </span>
            <button className='border-2 border-white text-white px-8 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <Footer />
      </div>
    </div>
  )
}

export default Offer
