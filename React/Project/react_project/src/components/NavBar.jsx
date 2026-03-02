import { Link, useNavigate } from "react-router-dom"
import image from '../assets/images/add-to-cart.png'
import { useContext } from "react"
import CountContext from "../context/CountContext"

const NavBar = () => {

  const { count, isAuthenticated, logout, user } = useContext(CountContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-white shadow-md p-4 px-10 z-50">

      {/* Logo */}
      <Link to="/" className="cursor-pointer">
        <h1 className="text-2xl font-serif font-bold flex items-center">
          <span className="text-green-700 border-r-2 border-green-300 pr-2">JM</span>
          <span className="text-gray-800 pl-2">Maligaii</span>
          <span className="text-xs text-green-600 ml-2 font-sans self-end mb-1">
            Grocery Store
          </span>
        </h1>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-8 items-center text-lg font-medium text-gray-700">
        <Link to="/" className="hover:text-green-600 transition duration-200">Products</Link>
        <Link to="#" className="hover:text-green-600 transition duration-200">Categories</Link>
        <Link to="#" className="hover:text-green-600 transition duration-200">Offers</Link>

        {/* Cart Icon */}
        <Link to="/cart" className="relative flex items-center hover:scale-110 transition-transform duration-200">
          <img src={image} className="w-8 h-8" alt="Cart" />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </Link>

        {/* Auth Buttons */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="text-gray-800 font-semibold cursor-pointer hover:text-green-600 transition flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              {user?.name}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition duration-300 shadow-md font-sans"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition duration-300 shadow-md"
          >
            Login
          </Link>
        )}
      </div>

    </nav>
  )
}

export default NavBar
