
import onion from '../assets/images/onion.png'
import tomato from '../assets/images/tomato.png'
import chilly from '../assets/images/chilly.png'
import garlic from '../assets/images/garlic.png'
import ginger from '../assets/images/ginger.png'
import potato from '../assets/images/potato.png'

import Offer from './Offer'

const Card = () => {
  
  const products = [
    {id:1, img:onion, productname:"Onion", productprice:"1kg - ₹45"},
    {id:2, img:tomato, productname:"Tomato", productprice:"1kg - ₹20"},
    {id:3, img:chilly, productname:"Green Chilly", productprice:"1kg - ₹50"},
    {id:4, img:garlic, productname:"Garlic", productprice:"1kg - ₹100"},
    {id:5, img:ginger, productname:"Ginger", productprice:"1kg - ₹90"},
    {id:6, img:potato, productname:"Potato", productprice:"1kg - ₹40"}
  ]

  return (
    <>
      <div className='mt-8 p-5'>
        
        {/* First Row - 3 cards */}
        <div className='flex flex-wrap justify-center items-stretch mb-8 gap-8'>
          {products.slice(0, 3).map((e) => (
            <div 
              key={e.id} 
              className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col w-[320px] h-[420px]'
            >
              <div className='relative h-48 flex items-center justify-center bg-linear-to-b from-green-50 to-white rounded-t-xl p-4'>
                <img 
                  className='w-36 h-36 object-contain' 
                  src={e.img} 
                  alt={e.productname} 
                />
                <button className='absolute top-3 right-3 bg-white p-2 rounded-full shadow-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className='flex flex-col flex-grow p-5'>
                <div className='mb-4'>
                  <h2 className='text-xl font-bold text-gray-800 text-center mb-2'>
                    {e.productname}
                  </h2>
                  <div className='flex justify-center items-center gap-2'>
                    <p className='text-lg font-bold text-green-700'>
                      {e.productprice}
                    </p>
                    <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full'>
                      20% OFF
                    </span>
                  </div>
                  <p className='text-sm text-gray-500 text-center line-through mt-1'>
                    ₹{Math.round(parseInt(e.productprice.match(/\d+/)[0]) * 1.2)}
                  </p>
                </div>
                
                <div className='flex justify-center mb-4'>
                  <div className='flex items-center border border-gray-300 rounded-lg'>
                    <button className='px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg'>-</button>
                    <span className='px-4 py-1 border-x border-gray-300'>1 kg</span>
                    <button className='px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg'>+</button>
                  </div>
                </div>
                
                <div className='mt-auto'>
                  <button className='w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - 3 cards */}
        <div className='flex flex-wrap justify-center items-stretch gap-8'>
          {products.slice(3, 6).map((e) => (
            <div 
              key={e.id} 
              className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col w-[320px] h-[420px]'
            >
              <div className='relative h-48 flex items-center justify-center bg-gradient-to-b from-green-50 to-white rounded-t-xl p-4'>
                <img 
                  className='w-36 h-36 object-contain' 
                  src={e.img} 
                  alt={e.productname} 
                />
                <button className='absolute top-3 right-3 bg-white p-2 rounded-full shadow-md'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              
              <div className='flex flex-col flex-grow p-5'>
                <div className='mb-4'>
                  <h2 className='text-xl font-bold text-gray-800 text-center mb-2'>
                    {e.productname}
                  </h2>
                  <div className='flex justify-center items-center gap-2'>
                    <p className='text-lg font-bold text-green-700'>
                      {e.productprice}
                    </p>
                    <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full'>
                      20% OFF
                    </span>
                  </div>
                  <p className='text-sm text-gray-500 text-center line-through mt-1'>
                    ₹{Math.round(parseInt(e.productprice.match(/\d+/)[0]) * 1.2)}
                  </p>
                </div>
                
                <div className='flex justify-center mb-4'>
                  <div className='flex items-center border border-gray-300 rounded-lg'>
                    <button className='px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg'>-</button>
                    <span className='px-4 py-1 border-x border-gray-300'>1 kg</span>
                    <button className='px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg'>+</button>
                  </div>
                </div>
                
                <div className='mt-auto'>
                  <button className='w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300'>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Offer/>
    </>
  )
}

export default Card