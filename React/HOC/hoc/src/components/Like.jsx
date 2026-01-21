

const Like = ({ text, show ,data}) => {
  return (
    <> 
      
      <button onClick={show} className="bg-black text-white">
        {text}
      </button>
    </>
  )
}

export default Like
