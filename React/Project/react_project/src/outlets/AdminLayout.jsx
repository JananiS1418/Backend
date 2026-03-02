import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import CountContext from "../context/CountContext";

const AdminLayout = () => {
  const { user, logout } = useContext(CountContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="bg-blue-950 text-white w-72 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center font-sans tracking-widest ">Admin</h1>

        <div className="flex flex-col gap-6 text-xl">
          <Link to="/dashboard" className="hover:text-yellow-400 font-sans">
            Dashboard
          </Link>
          <Link to="/categories" className="hover:text-yellow-400 font-sans">
            Categories
          </Link>
          <Link to="/products" className="hover:text-yellow-400 font-sans">
            Products
          </Link>
          <Link to="/customers" className="hover:text-yellow-400 font-sans">
            Customers
          </Link>
        </div>
      </div>


      <div className="flex-1 flex flex-col">


        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold font-serif">Admin Panel</h2>
          <div className="flex items-center gap-6">
            <Link to="/profile" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              {user?.name}
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition font-sans"
            >
              Logout
            </button>
          </div>
        </div>


        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;
