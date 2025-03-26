import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Fetcher from "./components/Fetcher";
import Post from "./components/Post";
import Facebook from "./pages/Facebook";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
