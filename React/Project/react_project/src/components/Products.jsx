import React, { useEffect, useState } from 'react'

const Products = () => {

 const[products,setProducts] = useState([])
 const [name,setName] = useState('')
 const [category,setCategory] = useState('')
 const [status,setStatus]  = useState("")
 const [price,setPrice] = useState("")
 const [showcategory,setShowCategory] = useState([])


const handleClick = () => {
  if (!name || !category || !price || !status) {
    alert("Please fill all fields");
    return;
  }

  const data = localStorage.getItem("products");
  const productsArray = data ? JSON.parse(data) : [];

  const storedata = {
    id: productsArray.length + 1,
    name,
    category,
    price,
    status,
  };

  productsArray.push(storedata);

  localStorage.setItem("products", JSON.stringify(productsArray));
  setProducts(productsArray);

  setName("");
  setCategory("");
  setPrice("");
  setStatus("");
};
const getCategory = ()=>{
   const getdata = localStorage.getItem("categories") 
   const categorychange = JSON.parse(getdata)
   console.log(categorychange);
   
   setShowCategory(categorychange.filter((e)=>e.status==="Active"))
}

useEffect(() => {
  
  const data = localStorage.getItem("products");
  const changedata = data ? JSON.parse(data) : [];
  
  
  setProducts(changedata);
  getCategory()
}, []);




  return (
    <>
    <div>                                                                                                                      
      <h1 className="text-3xl text-center">Products Dashboard</h1>
      <div className='flex gap-20 mt-10'>
        <input value={name} onChange={(e)=>setName(e.target.value)} className="bg-gray-300 p-1 rounded" type="text" placeholder='Add Product Name...' />

       <select value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-gray-300 p-1 rounded" >
        <option selected disabled value="">Select Category</option>
        {showcategory.map((e,i)=>(
           <option key={i+1} value={e.category}  >{e.category}</option>
        ))}

        


       </select>
        {/* <input value={category} onChange={(e)=>setCategory(e.target.value)} className="bg-gray-300 p-1 rounded" type="text" placeholder='Add Category...' /> */}
         <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" className="bg-gray-300 p-1 rounded"placeholder="Add Price..."/>


        <select value={status} onChange={(e) => setStatus(e.target.value)}className="bg-gray-300 p-1 rounded">
         <option value="" disabled> Select Status</option>
         <option value="Active">Active</option>
         <option value="Inactive">Inactive</option>
      </select>


        <button onClick={handleClick} className="bg-black text-white px-4 rounded">Add Product</button>
      </div>


 <table className="mt-6 w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Status</th>
              <th className='border p-2'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((e) => (
              <tr key={e.id} className="text-center">
                <td className="border p-2">{e.id}</td>
                <td className="border p-2">{e.name}</td>
                
                <td className="border p-2">{e.category}</td>
                <td className="border p-2" >{e.price}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      e.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {e.status}
                  </span>
                </td>
                <td className="border p-2 space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
    </div>
    </>
  )
}

export default Products
