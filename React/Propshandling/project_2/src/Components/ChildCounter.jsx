import React from 'react'

const ChildCounter = ({dataincrement,datadecrement}) => {
  return (
    <div>
      <button onClick={dataincrement}>+</button>
      <button onClick={datadecrement}>-</button>
    </div>
  )
}

export default ChildCounter
