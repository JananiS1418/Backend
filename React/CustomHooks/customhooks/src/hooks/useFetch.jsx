import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data,setData] = useState([])
https://dummyjson.com/users
    useEffect(()=>{
        const fetchdata =  async()=>{
            const takedata = await fetch(url)
            const showdata = await takedata.json()
            setData(showdata.users)
        }
        fetchdata()
    },[url])
  return {data}
}

export default useFetch
