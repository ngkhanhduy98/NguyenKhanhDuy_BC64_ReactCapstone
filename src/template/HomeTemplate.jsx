import React from "react";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
