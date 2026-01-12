const RenderingPlayground = ()=>{

    const name = "Janu"
    const age = 22

    const user = { name : "Jannai",city:"Chennai" }

    const array = ["HTML","CSS","JS","React"]

    const products = [
    { id: 1, name: "Laptop", price: 60000 },
    { id: 2, name: "Mobile", price: 30000 },
    { id: 3, name: "Headphones", price: 2000 },
  ];
  return (

    <>
     <div>
        <h2>Primitive</h2>
        <p>name : {name}</p>
        <p>age :{age}</p>
     </div>
     <div>
      <h2>Object</h2>
      <p>name:{user.name}</p>
      <p>City :{user.city}</p>
     </div>

     <div>
        <h2>Array</h2>
        {array.map((e,i)=>(
          <p key={i} >{e}</p>

        ))}
     </div>

     <div>
        <table border="2" cellPadding="1">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {products.map((e,i)=>(
                  <tr key={i}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                  </tr>


                ))}
                
            </tbody>
        </table>
     </div>
    </>
  )
}
export default RenderingPlayground