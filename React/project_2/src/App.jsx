import React from 'react'
import UserCard from './Components/UserCard'
import GrandParent from './Components/GrandParent'

import Parent from './Components/Parent'
import ParentCounter from './Components/ParentCounter'
import UserFormParent from './Components/UserFormParent'

const App = () => {

  const data = {
    name:"Janu",age:"22",city:"Chennai ",isAdmin : true
  }
  return (
    <>
      

      <UserCard showdata = {data}/>
      <Parent/>
      <ParentCounter/>
      <GrandParent/>
      <UserFormParent/>
    </>
  )
}

export default App
