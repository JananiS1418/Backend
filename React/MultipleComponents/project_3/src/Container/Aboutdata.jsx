import React, { useEffect, useState } from 'react'
import UserList from '../Components/UserList'

const Aboutdata = () => {

    const [data,setData] = useState([])

    useEffect(()=>{
        const fetchdata = async()=>{
            const getdata = await fetch("https://dummyjson.com/users?limit=5")
            const changedata = await getdata.json()
            setData(changedata.users)
        }
        fetchdata()
    },[])
  return (
    <>
     <UserList getuserdata = {data}/>
    </>
  )
}

export default Aboutdata
