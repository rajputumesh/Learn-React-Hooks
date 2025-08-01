import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Sidebar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
