import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiCloseCircleFill } from "react-icons/ri";
import logo from "./../../assets/logo.png";
import person from "./../../assets/person.png";
import heart from "./../../assets/heart.png";
import cartimg from "./../../assets/cart.png";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../Components/ShoppingCart.css";

const Navbar = ({ cart, setCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showWishPopup, setShowWishPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuWishOpen, setIsMobileMenuWishOpen] = useState(false);
  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);

  // Fetch data from API
  const getData = async () => {
    try {
      const response = await fetch("https://api-5e1h.onrender.com/medical/categories/all");
      const resdata = await response.json();
      setData(resdata);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log(cart)
    getData();
  }, [cart, setCart]);

  // Function to handle redirection to profile page
  const redirectToProfile = () => {
    window.location.href = '/profile';
  };

  const onButtonClick = () => {
    setShowPopup(!showPopup);
  };

  const onButtonWishClick = () => {
    setShowWishPopup(!showWishPopup);
  }

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuWishToggle = () => {
    setIsMobileMenuWishOpen(!isMobileMenuWishOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to handle removing item from cart
  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    setCart(newCart);
  };

  const shippingcost = 40;
  const tax = 0.15;

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.SP, 0);
  };

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
            <div className="hamburger" onClick={handleMenuToggle}>
              {isMobileMenuOpen ? (
                <FaTimes size={20} style={{ color: "black" }} />
              ) : (
                <FaBars size={20} style={{ color: "black" }} />
              )}
            </div>
          </nav>
          <div className="nav-right">
            <img src={person} alt="person" onClick={redirectToProfile} />
            <img src={heart} alt="heart" onClick={onButtonWishClick} />
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
              <RiCloseLine style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={() => {
                onButtonClick();
                handleMenuToggle();
              }} />
            </div>
            <div className="cart-glance">
              {cart.map((res, id) => (
                <div key={id} className="summary-img">
                  <img src={res.Image} alt="product" />
                  <h4>{res.Heading}</h4>
                  <p>1</p>
                  <p>X</p>
                  <p>{res.SP}</p>
                  <RiCloseCircleFill style={{ fontSize: '1.5rem' }} onClick={() => handleRemoveFromCart(id)} />
                </div>
              ))}
              {/* Display subtotal */}
              <div className="cart-subtotal">
                <p>Subtotal</p>
                <h4>{cart.length > 0 ? `Rs. ${calculateSubtotal() + shippingcost + (calculateSubtotal() * tax)}` : ''}</h4>
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

      {/* Wishlist Popup */}
      {showWishPopup && (
        <section className="wishlist-main">
          <div className="wishlist-container">
            <div className="wishlist-header">
              <h2>Wishlist</h2>
              <RiCloseLine style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={() => {
                onButtonWishClick();
                handleMenuWishToggle();
              }} />
            </div>
            <div className="wishlist-glance">
              {cart.map((res, id) => (
                <div key={id} className="wishlist-content">
                  <img src={res.Image} alt="product" />
                  <h4>{res.Heading}</h4>
                  <p>{res.SP}</p>
                  <RiCloseCircleFill style={{ fontSize: '1.5rem' }} onClick={() => handleRemoveFromCart(id)} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
