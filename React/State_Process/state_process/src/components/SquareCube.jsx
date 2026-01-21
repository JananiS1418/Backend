import React, { useState } from 'react'

const SquareCube = () => {
  const [number, setNumber] = useState(1)

  const changeclick = () => {
    setNumber(number + 1)
  }

  return (
    <>
      <div>
        <p>Number: {number}</p>
        <p>Square: {number ** 2}</p>
        <p>Cube: {number ** 3}</p>

        <button onClick={changeclick}>
          Square / Cube
        </button>
      </div>
    </>
  )
}

export default SquareCube
