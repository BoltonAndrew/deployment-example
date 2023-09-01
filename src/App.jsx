import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import "./App.css";
import AndyPage from "./pages/Andy.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter className="App">
      <h1>Andy's Deployed Site</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/andy">Andy's Page</Link>
      </nav>
      <h2>{import.meta.env.VITE_API_KEY}</h2>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/andy" element={<AndyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
