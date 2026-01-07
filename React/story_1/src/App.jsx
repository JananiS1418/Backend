import { Route, Routes } from "react-router-dom";
import Story from "./Components/Story";
import Family from "./Components/Family";
import Obstacles from "./Components/Obstacles"; 

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Story />} />
        <Route path="/Family" element={<Family />} />
        <Route path="/Obstacles" element={<Obstacles />} /> 
      </Routes>
    </main>
  );
};

export default App; 