import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./ui/Header";
import Navbar from "./ui/Navbar";
import "./index.scss";

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
