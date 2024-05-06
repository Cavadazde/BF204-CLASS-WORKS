import React from "react";
import Navbar from "../../components/Main/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Main/Footer";

const MainRoot = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainRoot;
