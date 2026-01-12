import React from 'react'

const UserList = ({ getuserdata }) => {
  return (
    <div className="bg-amber-950 text-white h-100 flex justify-center items-start py-10  ">
      <div className="flex gap-8 mt-8">
        {getuserdata.map((e) => (
           <div key={e.id} className="bg-amber-900 w-52 rounded-xl p-4 flex flex-col items-center gap-3 shadow-lg">
            <img src={e.image} alt={e.firstName} className="w-24 h-24 rounded-full object-cover"/>
            <h1 className="text-xl font-semibold"> {e.firstName} </h1>
            <p className="text-sm text-center break-all">{e.email}</p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default UserList
