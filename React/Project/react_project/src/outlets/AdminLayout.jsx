import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <div className="bg-blue-950 text-white w-72 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin</h1>

        <div className="flex flex-col gap-6 text-xl">
          <Link to="/dashboard" className="hover:text-yellow-400">
            Dashboard
          </Link>
          <Link to="/categories" className="hover:text-yellow-400">
            Categories
          </Link>
          <Link to="/products" className="hover:text-yellow-400">
            Products
          </Link>
          <Link to="/customers" className="hover:text-yellow-400">
            Customers
          </Link>
        </div>
      </div>

      
      <div className="flex-1 flex flex-col">
        
       
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Admin Panel</h2>
          <Link className="text-blue-600 font-medium hover:underline">
            Profile
          </Link>
        </div>

        
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;
