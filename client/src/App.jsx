import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Feature from "./components/Feature";
import News from "./components/News";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Feature" element={<Feature />} />
          <Route path="/News" element={<News setProgress = {setProgress}/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
