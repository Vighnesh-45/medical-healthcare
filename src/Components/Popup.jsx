// src/components/Popup.js
import React from 'react';
import './Popup.css';
import "./../Components/Auth/Login"

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <Login />
      </div>
    </div>
  );
};

export default Popup;
