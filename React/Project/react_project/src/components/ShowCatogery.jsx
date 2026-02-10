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
     alert('are you sure to delete')
     localStorage.setItem("categorydata", JSON.stringify(filtered));

     setSaveCat(filtered);
     setShowCat(filtered);


}
    
  return (
   <>
   
   <form className="flex gap-2">
    <input type="text" value={cat.catname} onChange={handleChange} name="catname" placeholder="Enter the cat name" className="bg-black w-50 text-white p-2 rounded" />
    <select name="catstatus" value={cat.catstatus} onChange={handleChange} className="bg-black w-50 text-white p-2">
        <option  value={""} disabled>Select Status</option>
        <option value={"Active"}>Active</option>
        <option value={"Inactive"}>Inactive</option>
    </select>
   
   {editdata?<button onClick={handleUpdate} className="bg-black text-white p-2 w-30 rounded" type="button">Update</button>:<button onClick={handleSubmit} className="bg-black text-white p-2 w-30 rounded" type="button">Add</button>}


   </form>


  <div className="mt-4">
     <table className="border-2 w-100 h-60">
      <thead className="border-2">
  <tr>
    <th className="border-2">Sno</th>
    <th className="border-2">Cat Name</th>
    <th className="border-2">Cat Status</th>
    <th className="border-2">Action</th>
  </tr>
</thead>

       <tbody >
       {showcat.map((e)=>(

        <tr key={e.cat_id} className="text-center">
            <td className="border-2">{e.cat_id}</td>
            <td className="border-2">{e.catname}</td>
            <td className="border-2">{e.catstatus}</td>
            <td className="border-2">
            <button onClick={()=>handledit(e.cat_id)} className="bg-blue-700 text-white p-1 w-20 rounded">Edit</button> ||  
             <button onClick={()=>handldelete(e.cat_id)} className="bg-red-700 text-white p-1 w-20 ml-2 rounded">Delete</button>
            </td>
        </tr>

       ))}
        
       </tbody>
   </table>
  </div>
   
   </>
  )
}

export default ShowCatogery
