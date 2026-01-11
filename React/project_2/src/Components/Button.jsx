import React from 'react'
import PropTypes from 'prop-types'

const Button  = ({label,onClick,variant="primary"}) => {
  return (
    <>
     <div>
        <button style={{background:variant==="primary"?"blue":"gray",color:"white",padding:"10px"}} onClick={onClick}>{label}</button>
     </div>
    </>
  )
}

Button.propTypes = {label:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,variant:PropTypes.string}
export default Button
