import React from 'react'
import "./TopContainer.css"
import { CiSearch } from "react-icons/ci";


const TopContainer = () => {

  return (
    <section className="topcontainer-main">
      <div className="topcontainer-container">
        <div className="header-box">
          <div className="heading-content">
            <h4>New Arrival</h4>
            <h2>Discover Our New Collection</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, aliquam.</p>
            <div className="search-bar">
            <input type="search" name="search" id="search" />
            <CiSearch style={{fontSize: '1.5em' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TopContainer