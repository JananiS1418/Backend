import  { useState } from 'react'
import Like from './Like'
import withCount from '../hoc/withCount'

const Dislike = withCount(Like)

const Count = () => {
  const [data, setData] = useState(0)
  const [datas,setDatas]= useState(0)

  const countadd = () => {
    setData(data + 1)
  }
  const countsub = ()=>{
    setDatas(datas-1)
  }

  return (
    <>
       <h1>{data}</h1>
      <Like text={"Increment"} show={countadd} />
      <h2>{datas}</h2>
      <Dislike text={"Decrement"} show={countsub} />
    </>
  )
}

export default Count
