import React, { useState } from 'react'
import withText from '../hoc/withText'
import Hide from './Hide'

const Hide_com  = withText(Hide)

const Show = () => {
  const [text, setText] = useState(false)

  const showdatas = ()=>{
    setText(!text)
  }

  return (
    <>
      <h1>{text.toString()}</h1>
      <Hide text={"Showdata"} showdata={showdatas} />
      <Hide_com  />
    </>
  )
}

export default Show
