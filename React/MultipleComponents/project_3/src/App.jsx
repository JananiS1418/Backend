import { Link } from "react-router-dom"
import AppRoute from './Routing/AppRoute'


const App = () => {
  return ( 
    <>
    <NavBar/>
    <AppRoute/>
    </>
  )
}

export default App
 const NavBar = ()=>{
    return(
        <> 
        <div className="bg-amber-300 text-2xl text-black p-3 flex justify-between items-center">
         
         <div className="text-4xl">
          Joe
        </div>
        <div className="flex gap-10">
            <Link  to = "/" className="bg-black text-white p-1 rounded hover:bg-white hover:text-black">Home</Link>
            <Link  to = "/about"  className="bg-black text-white p-1 rounded hover:bg-white hover:text-black">About</Link>
            <Link  to = "/booking"  className="bg-black text-white p-1 rounded hover:bg-white hover:text-black">Book Ticket </Link>
        </div>
        </div>
        
        
        </>
    )
 }