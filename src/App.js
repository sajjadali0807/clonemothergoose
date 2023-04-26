import React from "react";

// import Login from "./components/Login";

import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { Axios } from "axios";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
