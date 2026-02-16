import { useState, useEffect } from 'react'



const Products = () => {

  const [products, setProducts] = useState({ name: "", category: "", price: "", status: "", image: "" })

  const [saveproducts, setSaveproducts] = useState([])
  const [showproducts, setShowproducts] = useState([])
  const [categories, setCategories] = useState([])
  const [editdata, setEditdata] = useState("")


  const handleChange = (e) => {

    setProducts({ ...products, [e.target.name]: e.target.value })

  }


  const handleClick = (e) => {

    e.preventDefault()

    if (!products) {
      alert("Please fill all fields");
      return;
    }

    const data = localStorage.getItem("products");
    const productsArray = data ? JSON.parse(data) : [];

    const storedata = {
      id: productsArray.length + 1,
      name: products.name,
      category: products.category,
      price: products.price,
      status: products.status,
      image: products.image
    };

    productsArray.push(storedata);

    localStorage.setItem("products", JSON.stringify(productsArray));
    setSaveproducts(productsArray);

    setProducts({ name: "", category: "", price: "", status: "", image: "" })


  }

  const getCategory = () => {
    const getdata = localStorage.getItem("categorydata");
    const categorychange = getdata ? JSON.parse(getdata) : [];
    console.log(categorychange);

    setCategories(categorychange.filter((e) => e.catstatus === "Active"));
  };


  useEffect(() => {

    const data = localStorage.getItem("products");
    const changedata = data ? JSON.parse(data) : [];


    setShowproducts(changedata);
    getCategory()

  }, [saveproducts]);


  const handledit = (id) => {
    const data = JSON.parse(localStorage.getItem("products")) || []

    const finddata = data.find((e) => e.id === id)

    setEditdata(id)
    setProducts(finddata)
  }


  const handldelete = (id) => {

    const data = JSON.parse(localStorage.getItem("products") ?? "[]");
    const filtered = data.filter((item) => item.id !== id);
    //console.log(filtered);
    alert('Are you sure to delete')
    localStorage.setItem("products", JSON.stringify(filtered));

    setSaveproducts(filtered);
    setShowproducts(filtered);


  }



  const handleUpdate = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("products") ?? "[]");

    const isDuplicate = data.some(
      (item) =>
        item.id !== editdata &&
        item.name.trim().toLowerCase() ===
        products.name.trim().toLowerCase()
    );

    if (isDuplicate) {
      alert("The name already exists");
      return;
    }

    const update = data.map((item) =>
      item.id === editdata
        ? { ...item, name: products.name, category: products.category, price: products.price, status: products.status, image: products.image }
        : item
    );

    localStorage.setItem("products", JSON.stringify(update));

    setSaveproducts(update);
    setShowproducts(update);

    alert("Value updated");
    setProducts({ name: "", category: "", price: "", status: "", image: "" })

    setEditdata("");
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
              <option key={itam.cat_id} value={itam.catname}>
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
                key={e.id}
                className="text-center hover:bg-gray-800 transition"
              >
                <td className="border border-gray-700 px-4 py-2">
                  {e.id}
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
                  <button onClick={() => handledit(e.id)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2">
                    Edit
                  </button>
                  <button onClick={() => handldelete(e.id)} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
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

