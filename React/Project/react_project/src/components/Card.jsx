
import { useContext, useEffect, useState } from 'react'
import CountContext from '../context/CountContext'
import Offer from './Offer'

const Card = () => {

  const [products, setProducts] = useState([])
  const { addToCart } = useContext(CountContext)

  useEffect(() => {
    const fetchActiveProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products")
        if (response.ok) {
          const data = await response.json()
          const activeProducts = data.filter(p => p.status === "Active")
          setProducts(activeProducts)
        }
      } catch (error) {
        console.error("Error fetching active products:", error)
      }
    }
    fetchActiveProducts()
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
                key={e._id}
                className='bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col w-[320px] h-[480px] group overflow-hidden border border-gray-100'
              >
                <div className='relative h-56 flex items-center justify-center bg-gray-50 overflow-hidden'>
                  <img
                    className='w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110'
                    src={e.image || "https://placehold.co/150?text=No+Image"}
                    alt={e.name}
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150?text=No+Image" }}
                  />
                  <div className='absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md'>
                    SALE
                  </div>
                </div>

                <div className='flex flex-col flex-grow p-6'>
                  <div className='mb-auto'>
                    <h2 className='text-xl font-bold text-gray-800 text-center mb-1 line-clamp-1'>
                      {e.name}
                    </h2>
                    <p className='text-gray-500 text-sm text-center mb-3'>{e.category}</p>

                    <div className='flex justify-center items-end gap-2 mb-4'>
                      <p className='text-2xl font-bold text-green-600'>
                        ₹{e.price}
                      </p>
                      <p className='text-sm text-gray-400 line-through mb-1'>
                        ₹{Math.round(parseInt(e.price) * 1.2)}
                      </p>
                    </div>
                  </div>

                  <div className='flex justify-center mb-6'>
                    <div className='flex items-center border border-gray-300 rounded-lg overflow-hidden'>
                      <button className='px-4 py-1 text-gray-600 hover:bg-gray-100 transition-colors font-bold'>-</button>
                      <span className='px-4 py-1 text-sm font-medium'>1 kg</span>
                      <button className='px-4 py-1 text-gray-600 hover:bg-gray-100 transition-colors font-bold'>+</button>
                    </div>
                  </div>

                  <div className='mt-auto'>
                    <button
                      onClick={() => addToCart(e)}
                      className='w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 active:scale-95 flex justify-center items-center gap-2'
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