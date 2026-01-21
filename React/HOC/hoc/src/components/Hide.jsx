import React from 'react'

const Hide = ({ text, showdata }) => {
  return (
    <>
      <button onClick={showdata}>{text}</button>
    </>
  )
}

export default Hide
