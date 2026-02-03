import React, { useState } from 'react'

const useInput = (initialvalue = "") => {
    const [value,setValue] = useState(initialvalue)

    const changevalue = (e)=>{
        setValue(e.target.value)
}
  return {value,changevalue}
}

export default useInput
