import { useEffect, useState, useContext } from "react"
import CountContext from "../context/CountContext"


const ShowCatogery = () => {

  const { user } = useContext(CountContext)
  const [cat, setCat] = useState({ catname: "", catstatus: "" })
  const [savecat, setSaveCat] = useState([])
  const [showcat, setShowCat] = useState([])
  const [editdata, setEditData] = useState("")
  const handleChange = (e) => {

    setCat({ ...cat, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!cat.catname || !cat.catstatus) {
      alert("Please fill all fields")
      return
    }

    try {
      const url = editdata
        ? `http://localhost:5000/api/categories/${editdata}`
        : "http://localhost:5000/api/categories"

      const method = editdata ? "PUT" : "POST"

      console.log(`${method}ing category data:`, cat)

      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user?.token}`
        },
        body: JSON.stringify(cat)
      })

      if (response.ok) {
        setCat({ catname: "", catstatus: "" })
        setEditData("")
        fetchCategories()
        alert(editdata ? "Value updated" : "Saved Successfully done")
      } else {
        const errorData = await response.json()
        alert(errorData.message || "Operation failed")
      }
    } catch (error) {
      console.error("Error during category operation:", error)
      alert("Network error: Could not connect to the server")
    }
  }


  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories")
      if (response.ok) {
        const data = await response.json()
        console.log("Fetched categories:", data)
        setShowCat(data)
      }
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handledit = (id) => {
    const finddata = showcat.find((e) => e._id === id)
    setCat({
      catname: finddata.catname,
      catstatus: finddata.catstatus
    })
    setEditData(id)
  }

  const handleUpdate = () => {
    // This function is no longer used directly as handleSubmit handles both
  };

  const handldelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this category?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/categories/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user?.token}`
        }
      })

      if (response.ok) {
        fetchCategories()
        alert("Category deleted")
      }
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }

  return (
    <>
      <div>
        <h1 className="text-center text-3xl">Category Dashboard </h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-900 mt-10 p-5 rounded-lg flex flex-wrap gap-4 items-center">
        <input
          type="text"
          value={cat.catname}
          onChange={handleChange}
          name="catname"
          placeholder="Enter the cat name"
          className="bg-gray-800 text-white px-4 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          name="catstatus"
          value={cat.catstatus}
          onChange={handleChange}
          className="bg-gray-800 text-white px-4 py-2 rounded w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={""} disabled>
            Select Status
          </option>
          <option value={"Active"}>Active</option>
          <option value={"Inactive"}>Inactive</option>
        </select>

        {editdata ? (
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-semibold"
          >
            Update
          </button>
        ) : (
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-semibold"
          >
            Add
          </button>
        )}
      </form>


      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border border-gray-700 text-white">
          <thead className="bg-gray-800">
            <tr>
              <th className="border border-gray-700 px-4 py-2">Sno</th>
              <th className="border border-gray-700 px-4 py-2">Cat Name</th>
              <th className="border border-gray-700 px-4 py-2">Cat Status</th>
              <th className="border border-gray-700 px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody className="bg-gray-900">
            {showcat.map((e) => (
              <tr
                key={e._id}
                className="text-center hover:bg-gray-800 transition"
              >
                <td className="border border-gray-700 px-4 py-2">
                  {e._id.slice(-4)}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  {e.catname}
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded text-sm ${e.catstatus === "Active"
                      ? "bg-green-600"
                      : "bg-red-600"
                      }`}
                  >
                    {e.catstatus}
                  </span>
                </td>
                <td className="border border-gray-700 px-4 py-2">
                  <button
                    onClick={() => handledit(e._id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handldelete(e._id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );

}

export default ShowCatogery
