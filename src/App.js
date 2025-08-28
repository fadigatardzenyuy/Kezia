import "./App.css";

import { Routes, Route } from "react-router-dom";


import Homepage from './pages/Homepage';
import Services from "./pages/Services";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;