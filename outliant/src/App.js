import logo from "./logo.svg";
import "./App.css";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
 
    <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
