import { Link } from "react-router-dom"
import image from '../assets/images/add-to-cart.png'
import { useContext } from "react"
import CountContext from "../context/CountContext"



const NavBar = () => {

  const {count} = useContext(CountContext)
  return (
    <>

    <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-gray-100 p-4 px-10 z-50 shadow">

  
  {/* Logo */}
  <div>
    <h1 className="text-2xl font-serif font-bold">
      <span className="text-green-700 border-r-2 border-green-300 pr-2">JM</span>
      <span className="text-gray-800 pl-2">Maligaii</span>
      <span className="text-xs text-green-600 block font-sans">
        Grocery Store
      </span>
    </h1>
  </div>

  
  <div className="flex gap-15 items-center">
    <Link to="/">Products</Link>
    <Link>Categories</Link>
    <Link>Offers</Link>
    <img src={image} className="w-10 h-10" alt="" />{count}
    
   <Link to="/login">Login</Link>
  </div>

</div> 


    </>
  )
}

export default NavBar
