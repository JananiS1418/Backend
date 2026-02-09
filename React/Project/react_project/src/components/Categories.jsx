import { useEffect, useState } from "react";

const Categories = () => {
  const [search, setSearch] = useState("");
  const [add,  setAdd] = useState("");
  const [produts, setProducts] = useState([]);
  const [status, setStatus] = useState("");
  
  const[edit,setEdit] = useState(null)

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("categories")) || [];
    setProducts(data);
  }, []);

  const filtereddata = produts.filter((e) =>
    e.category.toLowerCase().includes(search.toLowerCase())
  );

  const addCategory = () => {

     if (!add || !status) {
    alert("Please fill all fields");
    return;
  }
    

    const data = JSON.parse(localStorage.getItem("categories")) || [];

    const storedata = {
      id: data.length + 1,
      category: add,
      status: status,
    };

    data.push(storedata);
    localStorage.setItem("categories", JSON.stringify(data));
    setProducts(data);

    setAdd("");
    setStatus("");
  };


  const editClick = (editid)=>{

  
     
  }

  return (
    <>
      <div>
        <h1 className="text-3xl text-center">Categories Dashboard</h1>

        <div className="flex mt-10 gap-10">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-300 p-1 rounded"
            placeholder="Search Category..."
          />

        

          <input
            value={add}
            onChange={(e) => setAdd(e.target.value)}
            type="text"
            className="bg-gray-300 p-1 rounded"
            placeholder="Add Category..."
          />

            <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-gray-300 p-1 rounded"
          >
            <option disabled value="">
              Select Status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button
            onClick={addCategory}
            className="bg-black text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        <table className="mt-6 w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtereddata.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="border p-2">{p.id}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2">
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      p.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="border p-2 space-x-2">
                  <button onClick={()=>editClick(p.id)} className="bg-blue-500 text-white px-3 py-1 rounded">
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
  );
};

export default Categories;
