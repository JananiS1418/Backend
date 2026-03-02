import { useState, useEffect, useContext } from 'react'
import CountContext from '../context/CountContext'


const Products = () => {

  const { user } = useContext(CountContext)
  const [products, setProducts] = useState({ name: "", category: "", price: "", status: "", image: "" })

  const [saveproducts, setSaveproducts] = useState([])
  const [showproducts, setShowproducts] = useState([])
  const [categories, setCategories] = useState([])
  const [editdata, setEditdata] = useState("")

  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value })
  }
  const handleClick = async (e) => {
    e.preventDefault()

    if (!products.name || !products.category || !products.price || !products.status) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user?.token}`
        },
        body: JSON.stringify(products)
      })

      if (response.ok) {
        setProducts({ name: "", category: "", price: "", status: "", image: "" })
        fetchProducts()
        alert("Product added successfully")
      } else {
        alert("Failed to add product")
      }
    } catch (error) {
      console.error("Error adding product:", error)
    }
  }

  const getCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories")
      if (response.ok) {
        const data = await response.json()
        setCategories(data.filter((e) => e.catstatus === "Active"));
      }
    } catch (error) {
      console.error("Error fetching categories for products:", error)
    }
  };


  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products")
      if (response.ok) {
        const data = await response.json()
        setShowproducts(data)
      }
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  useEffect(() => {
    fetchProducts()
    getCategory()
  }, []);


  const handledit = (id) => {
    const finddata = showproducts.find((e) => e._id === id)
    setEditdata(id)
    setProducts({
      name: finddata.name,
      category: finddata.category,
      price: finddata.price,
      status: finddata.status,
      image: finddata.image
    })
  }


  const handldelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      })

      if (response.ok) {
        fetchProducts()
        alert("Product deleted")
      }
    } catch (error) {
      console.error("Error deleting product:", error)
    }
  }



  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/products/${editdata}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user?.token}`
        },
        body: JSON.stringify(products)
      })

      if (response.ok) {
        fetchProducts()
        alert("Value updated");
        setProducts({ name: "", category: "", price: "", status: "", image: "" })
        setEditdata("");
      }
    } catch (error) {
      console.error("Error updating product:", error)
    }
  };



  return (
    <>

      <div >
        <h1 className='text-3xl  text-center '>Products Dashboard</h1>
      </div>
      <div className="bg-gray-900 mt-10 p-5 rounded-lg">


        <div className="flex flex-wrap gap-4 items-center">
          <input
            value={products.name}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Add Product Name..."
            className="bg-gray-800 text-white px-4 py-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={products.category}
            name="category"
            onChange={handleChange}
            className="bg-gray-800 text-white px-4 py-2 rounded w-56 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option disabled value="">
              Select Category
            </option>



            {categories.map((itam) => (
              <option key={itam._id} value={itam.catname}>
                {itam.catname}
              </option>
            ))}

          </select>


          <input
            value={products.price}
            name="price"
            onChange={handleChange}
            type="number"
            placeholder="Add Price..."
            className="bg-gray-800 text-white px-4 py-2 rounded w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            value={products.image}
            name="image"
            onChange={handleChange}
            type="text"
            placeholder="Enter Direct Image URL (https://...)"
            className="bg-gray-800 text-white px-4 py-2 rounded w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={products.status}
            name="status"
            onChange={handleChange}
            className="bg-gray-800 text-white px-4 py-2 rounded w-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          {editdata ? (
            <button
              onClick={handleUpdate}
              type="button"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-semibold"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleClick}
              type="button"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
            >
              Add
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-700 px-4 py-2">ID</th>
              <th className="border border-gray-700 px-4 py-2">Image</th>
              <th className="border border-gray-700 px-4 py-2">Name</th>
              <th className="border border-gray-700 px-4 py-2">Category</th>
              <th className="border border-gray-700 px-4 py-2">Price</th>
              <th className="border border-gray-700 px-4 py-2">Status</th>
              <th className="border border-gray-700 px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody className="bg-gray-900">
            {showproducts.map((e) => (
              <tr
                key={e._id}
                className="text-center hover:bg-gray-800 transition"
              >
                <td className="border border-gray-700 px-4 py-2">
                  {e._id.slice(-4)}
                </td>
                <td className="border border-gray-700 px-4 py-2 align-middle">
                  <div className="flex justify-center">
                    <img
                      src={e.image || "https://placehold.co/150?text=No+Image"}
                      alt={e.name}
                      className="h-12 w-12 object-cover rounded"
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150?text=No+Image" }}
                    />
                  </div>
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {e.name}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {e.category}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {e.price}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded text-sm ${e.status === "Active"
                      ? "bg-green-600"
                      : "bg-red-600"
                      }`}
                  >
                    {e.status}
                  </span>
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  <button onClick={() => handledit(e._id)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button onClick={() => handldelete(e._id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
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

