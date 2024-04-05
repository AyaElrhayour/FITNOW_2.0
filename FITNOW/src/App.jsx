import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Register from "./register";
import Login from "./login";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
