import { useState } from "react"


const useToggle = (initialvalue = true) => {

    const [toggle,setToggle] = useState(initialvalue)

    const changetoggle = ()=>{
        setToggle(!toggle)
    }
  return {toggle,changetoggle}
}

export default useToggle
