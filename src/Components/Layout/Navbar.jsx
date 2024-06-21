import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiCloseCircleFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import logo from "./../../assets/logo.png";
import person from "./../../assets/person.png";
import heart from "./../../assets/heart.png";
import cartimg from "./../../assets/cart.png";
import "./Navbar.css";
import "../../Components/ShoppingCart.css";

const Navbar = ({ cart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState([]);

  // Fetch data from API
  const getData = async () => {
    try {
      const response = await fetch("https://api-k7vh.onrender.com/medical/categories/all");
      const resdata = await response.json();
      setData(resdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log(cart)
    getData();
  }, [cart]);

  // Function to handle redirection to profile page
  const redirectToProfile = () => {
    // Replace '/profile' with the actual URL of your profile page
    window.location.href = '/profile';
  };

  const onButtonClick = () => {
    setShowPopup(!showPopup);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close menu on link click
  };

  const shippingcost = 50;
  const tax = 0.15;

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
            <img src={person} alt="person" onClick={redirectToProfile} />
            <img src={heart} alt="heart" />
            <img src={cartimg} alt="cart" onClick={onButtonClick} />
          </div>
        </div>
      </section>
      {/* Shopping Cart Popup */}
      {showPopup && (
        <section className="shoppingcart-main">
          <div className="shoppingcart-container">
            <div className="shoppingcart-header">
              <h2>Shopping Cart</h2>
              <RiCloseLine style={{ fontSize: '2.5rem' }} onClick={onButtonClick} />
            </div>
            <div className="cart-glance">
              {cart.map((res, id) => (
                <div key={id} className="summary-img">
                  <img src={res.Image} alt="product" />
                  <h4>{res.Heading}</h4>
                  <p>1</p>
                    <p>X</p>
                    <p>{res.SP}</p>
                    <RiCloseCircleFill style={{ fontSize: '1.5rem' }} />
                </div>
              ))}
              <div className="summary-close">
              </div>
              {/* Display subtotal */}
              <div className="cart-subtotal">
                <p>Subtotal</p>
                <h4>{cart.length > 0 ? `${cart[0].SP + shippingcost + (cart[0].SP * tax)}` : ''}</h4>
              </div>
            </div>
            <hr />
            {/* Cart buttons */}
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
};

export default Navbar;
