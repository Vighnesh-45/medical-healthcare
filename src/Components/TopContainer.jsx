import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import "./TopContainer.css"


const TopContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="topcontainer-main">
      <div className="topcontainer-container">
        <div className="header-box">
          <div className="heading-content">
            <h4>New Arrival</h4>
            <h2>Discover Our New Collection</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
            <div className="buy-now">
              {/* <Link to="/Shop"><button>Buy Now</button></Link> */}
              <input type="text" placeholder="Search for medicines..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContainer;
