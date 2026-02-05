import React from "react";
import { Link } from "react-router-dom";
import image from '../assets/images/dashboardimage.jpg'

const Dashboard = () => {

     const datas = [{id:1,values:"Total Products",total:1},
        {id:2,values:"Total Categories",total:1},
        {id:3,values:"Total Users",total:1},
        {id:4,values:"Total Orders",total:1}]
  return (
    <div className="flex min-h-screen bg-gray-100">

     
      <div className="bg-blue-950 text-white w-72 p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Admin
        </h1>

        <div className="flex flex-col gap-6 text-xl">
          <Link className="hover:text-yellow-400">Products</Link>
          <Link className="hover:text-yellow-400">Categories</Link>
          <Link className="hover:text-yellow-400">Customers</Link>
        </div>
      </div>

     
      <div className="flex-1 flex flex-col">

        
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Dashboard</h2>

          
          <Link className="text-blue-600 font-medium hover:underline">
            Profile
          </Link>
        </div>
          
   <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {datas.map((e) => (
    <div
      key={e.id}
      className="
        bg-white rounded-2xl shadow-lg p-6
        flex flex-col justify-between
        border-l-4 border-blue-600
        hover:scale-105 hover:shadow-xl
        transition-all duration-300
      "
    >
      <h1 className="text-gray-500 text-lg font-medium">
        {e.values}
      </h1>

      <p className="text-4xl font-bold text-blue-700 mt-4">
        {e.total}
      </p>
    </div>
  ))}
</div> 

  <div className="px-6 pb-6">
  <div
    className="
      w-full h-64
      rounded-2xl
      overflow-hidden
      shadow-lg
      border border-gray-200
    "
  >
    <img
      src={image}
      alt="Dashboard Banner"
      className="
        w-full h-full
        object-cover
        hover:scale-105
        transition-transform duration-500
      "
    />
  </div>
</div>



        

      </div>
    </div>
  );
};

export default Dashboard;
