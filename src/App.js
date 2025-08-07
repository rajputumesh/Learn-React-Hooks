import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/data";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="user-details/:user_id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
};

export default App;
