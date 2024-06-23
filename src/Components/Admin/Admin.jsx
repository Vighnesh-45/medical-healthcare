import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Admin.css";
import AddCategories from './AddCategories';
import AddProduct from "./AddProduct";
import ViewProducts from './ViewProducts';
import ViewUsers from './ViewUsers';

const Admin = () => {
  const [selectedButton, setSelectedButton] = useState("button1");
  const location = useLocation();
  const navigate = useNavigate();
  const condition = location.state || {};

  const validate = () => {
    if (condition !== "Pass") {
      navigate(`/adminlogin`);
    }
  };

  useEffect(() => {
    validate();
  }, [condition]);

  const renderComponent = () => {
    switch (selectedButton) {
      case "button1":
        return <AddCategories />;
      case "button2":
        return <AddProduct />;
      case "button3":
        return <ViewProducts />;
      case "button4":
        return <ViewUsers />;
      default:
        return null;
    }
  };

  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="admin-buttons">
          <button
            onClick={() => setSelectedButton("button1")}
            style={{
              backgroundColor: selectedButton === "button1" ? " #4CAF50" : "inherit",
            }}
          >
            Add Category
          </button>
          <button
            onClick={() => setSelectedButton("button2")}
            style={{
              backgroundColor: selectedButton === "button2" ? " #4CAF50" : "inherit",
            }}
          >
            Add Product
          </button>
          <button
            onClick={() => setSelectedButton("button3")}
            style={{
              backgroundColor: selectedButton === "button3" ? " #4CAF50" : "inherit",
            }}
          >
            View Product
          </button>
          <button
            onClick={() => setSelectedButton("button4")}
            style={{
              backgroundColor: selectedButton === "button4" ? " #4CAF50" : "inherit",
            }}
          >
            View Users
          </button>
        </div>
        <div className="admin-content">
          {renderComponent()}
        </div>
      </div>
    </section>
  );
};

export default Admin;
