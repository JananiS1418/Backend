
import { useContext, useEffect, useState } from 'react'
import CountContext from '../context/CountContext'
import Offer from './Offer'

const Card = () => {

  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CountContext)

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || []
    const activeProducts = storedProducts.filter(p => p.status === "Active")
    setProducts(activeProducts)
  }, [])

  return (
    <>
      <div className='mt-8 p-5'>

        {products.length === 0 ? (
          <div className="text-center text-gray-500 text-xl py-10">
            No products available. Please add products from the Admin Panel.
          </div>
        ) : (
          <div className='flex flex-wrap justify-center items-stretch mb-8 gap-8'>
            {products.map((e) => (
              <div
                key={e.id}
                className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col w-[320px] h-[450px]'
              >
                <div className='relative h-48 flex items-center justify-center bg-linear-to-b from-green-50 to-white rounded-t-xl p-4'>
                  <img
                    className='w-36 h-36 object-contain'
                    src={e.image || "https://placehold.co/150?text=No+Image"}
                    alt={e.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150?text=No+Image" }}
                  />
                </div>

                <div className='flex flex-col flex-grow p-5'>
                  <div className='mb-4'>
                    <h2 className='text-xl font-bold text-gray-800 text-center mb-2'>
                      {e.name}
                    </h2>
                    <div className='flex justify-center items-center gap-2'>
                      <p className='text-lg font-bold text-green-700'>
                        ₹{e.price}
                      </p>
                      <span className='text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full'>
                        20% OFF
                      </span>
                    </div>
                    <p className='text-sm text-gray-500 text-center line-through mt-1'>
                      ₹{Math.round(parseInt(e.price) * 1.2)}
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
                    <button
                      onClick={() => addToCart(e)}
                      className='w-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 active:scale-95'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <Offer />
      </div>
    </>
  )
}

export default Card