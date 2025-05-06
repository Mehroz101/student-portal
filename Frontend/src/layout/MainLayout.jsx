import React from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
