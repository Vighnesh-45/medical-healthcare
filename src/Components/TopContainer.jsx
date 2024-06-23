import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import "./TopContainer.css";

const TopContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api-k7vh.onrender.com/medical/medicine/all');
      const data = await response.json();
      const product = data.find(item => item.Heading && item.Heading.toLowerCase().includes(searchTerm.toLowerCase()));
      if (product) {
        navigate(`/SingleProduct/${product.id}`);
      } else {
        console.log('Product not found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search for medicines..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit"><CiSearch /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContainer;
