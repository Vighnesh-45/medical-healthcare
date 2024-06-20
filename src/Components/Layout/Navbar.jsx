import React, { useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import "../../Components/ShoppingCart.css";
import person from "./../../assets/person.png";
import search from "./../../assets/search.png";
import heart from "./../../assets/heart.png";
import cart from "./../../assets/cart.png";
import { RiCloseLine } from "react-icons/ri";
import { RiCloseCircleFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi"; // Import hamburger icon
import logo from "./../../assets/logo.png";
import dabur from "./../../assets/dabur.png"; // Assuming you have an image called dabur.png

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu

  const onButtonClick = () => {
    setShowPopup(!showPopup);
  }

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu on link click
  }

  return (
    <>
      <section className="navbar-main">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <Link to="/"><h2>Furniro</h2></Link>
          </div>
          <nav>
            <ul className={`navbar-list ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><Link to='/' onClick={handleLinkClick}>Home</Link></li>
              <li><Link to='/Shop' onClick={handleLinkClick}>Shop</Link></li>
              <li><Link to='/About' onClick={handleLinkClick}>About</Link></li>
              <li><Link to='/Contact' onClick={handleLinkClick}>Contact</Link></li>
            </ul>
            <div className="hamburger-icon" onClick={handleMenuToggle}>
              <FiMenu />
            </div>
          </nav>
          <div className="nav-right">
            <img src={person} alt="person" />
            <img src={heart} alt="heart" />
            <img src={cart} alt="cart" onClick={onButtonClick} />
          </div>
        </div>
      </section>
      {showPopup && (
        <section className="shoppingcart-main">
          <div className="shoppingcart-container">
            <div className="shoppingcart-header">
              <h2>Shopping Cart</h2>
              <RiCloseLine style={{ fontSize: '2.5rem' }} onClick={onButtonClick} />
            </div>
            <div className="cart-summary">
              <div className="summary-img">
                <img src={dabur} alt="product" />
              </div>
              <div className="summary-content">
                <div className="content-heading">
                  <h4>Pudin Hara</h4>
                </div>
                <div className="content-details">
                  <p>1</p>
                  <p>X</p>
                  <p>Rs. 250.00</p>
                </div>
              </div>
              <div className="summary-close">
                <RiCloseCircleFill style={{ fontSize: '1.5rem' }} />
              </div>
            </div>
            <div className="cart-subtotal">
              <p>Subtotal</p>
              <h4>Rs. 520.00</h4>
            </div>
            <hr />
            <div className="cart-buttons">
              <Link to="/Cart"><button>Cart</button></Link>
              <Link to="/Checkout"><button>Checkout</button></Link>
              <Link to="/ProductComparison"><button>Comparison</button></Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Navbar;
