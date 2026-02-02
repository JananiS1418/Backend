import React, { useEffect, useState } from 'react'

const App = () => {

     const [products,setProducts] = useState([])
    const [data,setData] = useState("")
     useEffect(()=>{

         const fetchdata = async ()=>{
          const  datas = await fetch("https://dummyjson.com/products?limit=15")
          const changedata = await datas.json()
          setProducts(changedata.products)
         }
 fetchdata()
     },[])
    
const categories = [...new Set(products.map(p => p.category))];

//console.log(categories);

const searchProduct = (e)=>{
  const showdata = e.target.value

  setData(showdata)
1

}

 const datas = products.filter((e)=>e.title.toLowerCase().includes(data.toLowerCase()))

  return (
    <>
    <h1  className='bg-pink-950 text-white text-center p-3 text-2xl'>Fetch Products</h1>

    

    <div className='bg-pink-800 flex gap-20 justify-center items-center p-3'>
          <input type="text" className='bg-pink-300 ' placeholder='Search Your Product' onChange={searchProduct} />
      
    <select required className='bg-pink-300'>
      <option  selected disabled >Select Your Product</option>
      {categories.map((e,i)=>(
        <option key={i+1} value={i+1}>
          {e}
        </option>

      ))}
     </select>
    </div>
     
     <div className='bg-white h-auto text-white flex flex-wrap justify-between gap-15 p-5 items-center '>
        
      {datas.map((e)=>(
        <div className='bg-pink-300 text-black w-50 h-80 flex flex-col gap-3 p-3  rounded'  key={e.id}>
          <img className=' bg-pink-200 w-50  h-50' src={e.images} alt="" />
          <h1>{e.title}</h1>
          <p>{e.category}</p>
          <p>{e.price}</p>
          </div>
      ))}
     </div> 
    
    </>
  )
}

export default App
