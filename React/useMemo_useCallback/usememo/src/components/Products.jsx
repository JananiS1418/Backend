import React, { useEffect, useMemo, useState } from 'react'

const Products = () => {

    const [products,setProducts]= useState([])

    useEffect(()=>{
        const fetchdatass = async ()=>{
            const datas =  await fetch("https://dummyjson.com/products?limit=5")
            const takedata = await datas.json()
            setProducts(takedata.products)
        }
        fetchdatass()
    },[]) 

    const totalprice = useMemo(()=>{
        console.log("Calculating price");
        
        return products.reduce((total,products)=>{
            return total+products.price
        },0)
    },[products])
  return (
    <>
     <div className='bg-cyan-900 gap-3 flex flex-col p-3 justify-center items-center text-white mt-2'>
       
            {products.map((e)=>(
                <div className='flex flex-col' key={e.id}>
                    <h1>{e.title}-{e.price}</h1>
                    
                </div>

            ))}

            <div>
                <h1> price-{totalprice}</h1>
            </div>
        
     </div>
    </>
  )
}

export default Products
