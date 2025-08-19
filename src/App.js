import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/data";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import UserDetail from "./pages/UserDetail";
import PostDetails from "./pages/PostDetails";

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user-details/:user_id" element={<UserDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:post_id" element={<PostDetails />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
