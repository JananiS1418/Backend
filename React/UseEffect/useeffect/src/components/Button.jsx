import { useState } from 'react'

const Button = () => {

  const [text, setText] = useState([])
  const[data,setData] = useState(false)

  const handleShow = async ()=>{
    setData(true)
    try {
        const fetchdata = await fetch("https://dummyjson.com/comments?limit=3")
        const datas = await fetchdata.json()
        setText(datas.comments)
    } catch (error) {
        setText("Something went wrong",error)
        
    }
    setData(false)
  }

  return (
    <>
      <div>
        <div className='bg-blue-950 mt-3 text-white h-80 text-center flex flex-col gap-4 items-center justify-center'>
          <h1>When the Button Click fetch the data</h1>

          <button onClick={handleShow} className='bg-white text-black w-40 p-2'>
            Fetch data
          </button>
           {data && <p>Loading...</p>}
          {text.map((e)=>(
            <div key={e.id}>
                <h1>Comments : {e.body}</h1>
                
                <p>Likes : {e.likes}</p>
            </div>

          ))}
          
        </div>
      </div>
    </>
  )
}

export default Button
