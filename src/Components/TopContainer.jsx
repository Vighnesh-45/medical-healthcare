import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./TopContainer.css";

const TopContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicineNames = async () => {
      try {
        const response = await fetch('https://api-5e1h.onrender.com/medical/medicine/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const medicineNames = data.map(medicine => medicine.Heading);
        setSuggestions(medicineNames);
      } catch (error) {
        console.error('Error fetching medicine names:', error);
      }
    };
    fetchMedicineNames();
  }, []);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    const filtered = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    ).slice(0, 5);  // Limit to 5 suggestions
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    navigate(`/product/${encodeURIComponent(suggestion)}`);
    setFilteredSuggestions([]);
    setIsInputFocused(false);
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
              <input
                type="text"
                placeholder="Search for a medicine..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setTimeout(() => setIsInputFocused(false), 100)}
              />
              {isInputFocused && filteredSuggestions.length > 0 && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0}}>
                  {filteredSuggestions.map((suggestion, index) => (
                    <li key={index} onMouseDown={() => handleSuggestionClick(suggestion)}>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContainer;
