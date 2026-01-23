import  { useState } from 'react'

const Product = () => {

    const [product,setProduct]= useState({productname:"",productprice:"",productquantity:""})
    const[data,setData] = useState({})


    const handleproduct = (e)=>{
      const data = e.target.value
      const datastore = e.target.name

      setProduct({...product,[datastore]:data})
      //console.log(product);
      
    }
    const dataSubmit = (e)=>{
      e.preventDefault()
      setData(product)
      //console.log(product);
      if(product.productquantity  == 0){
          alert("Out of Stock")
       }else if(product.productquantity <= 5){
        alert("Less Stock")
       }else{
        alert("In Stock")
       }
       
      
      

    }
     
  return (
    <>
      <div className='bg-fuchsia-900  text-white flex h-180  flex-col justify-center items-center'>
           <h1 className='text-3xl'> Product Form with Stock Status</h1>
        <form onSubmit={dataSubmit} >
           <div className='bg-white p-2 text-black flex flex-col gap-10 h-90 w-160 mt-3'>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
                <label>Enter the Productname : </label>
                <input  onChange={handleproduct} value={product.productname} name='productname' className='border-2 rounded w-75' type="text" placeholder='Enter in Capital' />
            </div>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
                <label>Enter the Productprice : </label>
                <input onChange={handleproduct} value={product.productprice} name='productprice' className='border-2 rounded w-75' type="number" placeholder='Enter the price' />
                 
            </div>
            <div className='text-2xl flex justify-center items-center  rounded gap-5 mt-4 '>
                <label>Enter the Productquantity : </label>
                <input onChange={handleproduct} value={product.productquantity} className='border-2 rounded w-75'name='productquantity' type="number" placeholder='Enter the quantity' />
                

            </div>
            <div className='bg-black text-white w-20 p-2 rounded ml-60 text-center '>
                <input type="submit" value="Submit" />
            </div>
           </div>

        </form>
        {data.productname && (
          <div className='mt-2 bg-fuchsia-400 text-black p-6 rounded-lg shadow-md w-80'>
            <h2 className='text-xl font-bold mb-4 text-center'>Product Details</h2>
            <div className='space-y-2 text-center'>
              <p> <span className='font-semibold'>Product Name :</span> {data.productname}</p>
              <p> <span className='font-semibold'>Product Price :</span> {data.productprice}</p>
              <p><span className='font-semibold'>Product Quantity :</span>{data.productquantity}</p>
            </div>

          </div>
        )}
      </div>
    </>
  )
}

export default Product
