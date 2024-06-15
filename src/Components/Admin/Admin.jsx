import  { useState } from "react";
import "./Admin.css"


const Admin = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const showDiv = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <section className="admin-main">
      <div className="admin-container">
        <div className="admin-buttons">
          <button onClick={() => showDiv("button1")} style={{
            backgroundColor:
              selectedButton === "button1" ? "#003bd4" : "inherit",
          }}>Add Category</button>
          <button onClick={() => showDiv("button2")} style={{
            backgroundColor:
              selectedButton === "button2" ? "#003bd4" : "inherit",
          }}>Add Product</button>
          <button onClick={() => showDiv("button3")} style={{
            backgroundColor:
              selectedButton === "button3" ? "#003bd4" : "inherit",
          }}>View Product</button>
          <button onClick={() => showDiv("button4")} style={{
            backgroundColor:
              selectedButton === "button4" ? "#003bd4" : "inherit",
          }}>View Users</button>
          <button onClick={() => showDiv("button5")} style={{
            backgroundColor:
              selectedButton === "button5" ? "#003bd4" : "inherit",
          }}>View Orders</button>
        </div>
          <div className="admin-container"></div>
      </div>
    </section>
  )
}

export default Admin