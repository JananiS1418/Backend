import { Route, Routes } from "react-router-dom"
import Button from "./components/Button"


const App = ()=>{
  return(
    <>
      <Routes>

        <Route path="/" element={<Button/>}/>
      </Routes>
    </>
  )

}
export default App

