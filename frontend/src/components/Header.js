import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/add") {
      setActiveTab("AddProduct");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, []);
  return (
    <div className="header">
      <p className="logo"> UserManagement System</p>
      <div className="header-right">
        <Link to="/">
          <p
            className={`${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Home
          </p>
        </Link>
        <Link to="/">
          <p
            className={`${activeTab === "AddProduct" ? "active" : ""}`}
            onClick={() => setActiveTab("AddProduct")}
          >
            Add Product
          </p>
        </Link>
        <Link to="/">
          <p
            className={`${activeTab === "About" ? "active" : ""}`}
            onClick={() => setActiveTab("About")}
          >
            About
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;