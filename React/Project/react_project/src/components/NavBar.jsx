import { Link } from "react-router-dom"
import image from '../assets/images/add-to-cart.png'
import search  from '../assets/images/search.png'


const NavBar = () => {
  return (
    <>

    <div className="flex justify-between items-center bg-gray-100 p-4 ">
        <div>
            <h1 className="text-1xl">JM  Maligai</h1>
        </div>
        <div  className="flex justify-center items-center gap-2">
            <img src={search} className="w-5 h-5" alt="" />
            <input type="text" placeholder="Search"className="rounded-2xl p-1 border-2 border-black" />
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
