import { Link } from "react-router-dom"
import image from '../assets/images/add-to-cart.png'
import search  from '../assets/images/search.png'


const NavBar = () => {
  return (
    <>

    <div className="flex justify-center gap-50 items-center bg-gray-100 p-4 ">
        <div>
          <h1 className="text-2xl font-serif font-bold">
  <span className="text-green-700 border-r-2 border-green-300 pr-2">JM</span>
  <span className="text-gray-800 pl-2">Maligai</span>
  <span className="text-xs text-green-600 block font-sans">Grocery Store</span>
</h1>
        </div>
        <div  className="flex justify-center items-center gap-2">
            <img src={search} className="w-5 h-5" alt="" />
            <input type="text" placeholder="Search"className="rounded-2xl w-60   p-1 border-2 border-black" />
        </div>
        <div className="flex gap-15 justify-center items-center">
            <Link to="/">Products</Link>
            <Link>Categories</Link>
            <Link>Offers</Link>
            <img src={image} className="w-10 h-10" alt="" />

        </div>
        <div>
            <button>Login</button>
        </div>
    </div>
    
    </>
  )
}

export default NavBar
