import React from "react";

// import Login from "./components/Login";
import { Home } from "./Home";
import { Route, Link, Routes, BrowserRouter } from "react-router-dom";
import { Axios } from "axios";
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/Task" element={<Task />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Axios /> */}
      <Home />
    </div>
  );
}

export default App;
