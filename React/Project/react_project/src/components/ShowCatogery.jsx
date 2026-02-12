import { useEffect, useState } from "react"


const ShowCatogery = () => {

    const [cat,setCat] = useState({catname:"",catstatus:""})
    const [savecat,setSaveCat] = useState([])
    const [showcat,setShowCat] = useState([])
    const [editdata,setEditData] = useState("")                         
    const handleChange = (e)=>{

        setCat({...cat,[e.target.name]:e.target.value})

    }

    const handleSubmit = (e)=>{

      e.preventDefault()
    

      
      
      const getdata = localStorage.getItem("categorydata")

      const changedata = getdata?JSON.parse(getdata):[]

     


      const isDuplicate = changedata.some(
  (item) =>
    item.catname.toLowerCase() === cat.catname.toLowerCase()
);

if (isDuplicate) {
  alert("The name already exists");
  return;
}


    const newCategory = {
    cat_id: changedata.length+1,
    catname: cat.catname,
    catstatus: cat.catstatus,
  };

      changedata.push(newCategory)

      localStorage.setItem("categorydata",JSON.stringify(changedata))

    
      setSaveCat(changedata)
      alert("Saved Succfully done")
       setCat({catname:"",catstatus:""})
      
}


useEffect(()=>{

    const storeData = ()=>{

        const gettabledata = JSON.parse(localStorage.getItem("categorydata"))
          
        setShowCat(gettabledata)
    }

    storeData()

},[savecat])

const handledit = (id)=>{

   const editdata = JSON.parse(localStorage.getItem("categorydata"))

   console.log(editdata);
   

   const finddata = editdata.find((e)=>e.cat_id === id)

   console.log(finddata);
   

   setCat(finddata)
   setEditData(id)

}

const handleUpdate = (e) => {
  e.preventDefault();

  const data = JSON.parse(localStorage.getItem("categorydata") ?? "[]");

  const isDuplicate = data.some(
    (item) =>
      item.cat_id !== editdata &&
      item.catname.trim().toLowerCase() ===
        cat.catname.trim().toLowerCase()
  );

  if (isDuplicate) {
    alert("The name already exists");
    return;
  }

  const update = data.map((item) =>
    item.cat_id === editdata
      ? { ...item, catname: cat.catname, catstatus: cat.catstatus }
      : item
  );

  localStorage.setItem("categorydata", JSON.stringify(update));

  setSaveCat(update);
  setShowCat(update);

  alert("Value updated");

  setCat({ catname: "", catstatus: "" });
  setEditData("");
};



const handldelete = (id)=>{

    const data = JSON.parse(localStorage.getItem("categorydata") ?? "[]");
    const filtered = data.filter((item) => item.cat_id !== id);
    //console.log(filtered);
     alert('Are you sure to delete')
     localStorage.setItem("categorydata", JSON.stringify(filtered));

     setSaveCat(filtered);
     setShowCat(filtered);


}
    
  return (
  <>
     <div>
      <h1 className="text-center text-3xl">Category Dashboard </h1>
     </div>
    <form className="bg-gray-900 mt-10 p-5 rounded-lg flex flex-wrap gap-4 items-center">
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
          onClick={handleUpdate}
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded font-semibold"
        >
          Update
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          type="button"
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
              key={e.cat_id}
              className="text-center hover:bg-gray-800 transition"
            >
              <td className="border border-gray-700 px-4 py-2">
                {e.cat_id}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                {e.catname}
              </td>
              <td className="border border-gray-700 px-4 py-2">
                <span
                  className={`px-3 py-1 rounded text-sm ${
                    e.catstatus === "Active"
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {e.catstatus}
                </span>
              </td>
              <td className="border border-gray-700 px-4 py-2">
                <button
                  onClick={() => handledit(e.cat_id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handldelete(e.cat_id)}
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
