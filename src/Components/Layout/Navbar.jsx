import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiCloseLine, RiCloseCircleFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./../../assets/logo.png";
import person from "./../../assets/person.png";
import heart from "./../../assets/heart.png";
import cartimg from "./../../assets/cart.png";
import "./Navbar.css";
import "../../Components/ShoppingCart.css";

const Navbar = ({ cart, setCart }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showWishPopup, setShowWishPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [data, setData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
    getData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleProfileRedirect = () => {
    navigate('/profile');
  };

  const toggleCartPopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleWishPopup = () => {
    setShowWishPopup(!showWishPopup);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.SP, 0);
  };

  const shippingCost = 40;
  const taxRate = 0.15;

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
              <li><Link to='/' onClick={toggleMobileMenu}>Home</Link></li>
              <li><Link to='/shop' onClick={toggleMobileMenu}>Shop</Link></li>
              <li><Link to='/about' onClick={toggleMobileMenu}>About</Link></li>
              <li><Link to='/contact' onClick={toggleMobileMenu}>Contact</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <FaTimes size={20} style={{ color: "black" }} />
              ) : (
                <FaBars size={20} style={{ color: "black" }} />
              )}
            </div>
          </nav>
          <div className="nav-right">
            <img src={person} alt="profile" onClick={handleProfileRedirect} />
            <img src={heart} alt="wishlist" onClick={toggleWishPopup} />
            <img src={cartimg} alt="cart" onClick={toggleCartPopup} />
            {isLoggedIn ? (
              <button className="logout" onClick={handleLogout}>Logout</button>
            ) : (
              <button className="login" onClick={handleLogin}>Login</button>
            )}
          </div>
        </div>
      </section>

      {showPopup && (
        <section className="shoppingcart-main">
          <div className="shoppingcart-container">
            <div className="shoppingcart-header">
              <h2>Shopping Cart</h2>
              <RiCloseLine style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={toggleCartPopup} />
            </div>
            <div className="cart-glance">
              {cart.map((item, index) => (
                <div key={index} className="summary-img">
                  <img src={item.Image} alt="product" />
                  <h4>{item.Heading}</h4>
                  <p>1</p>
                  <p>X</p>
                  <p>{item.SP}</p>
                  <RiCloseCircleFill style={{ fontSize: '1.5rem' }} onClick={() => handleRemoveFromCart(index)} />
                </div>
              ))}
              <div className="cart-subtotal">
                <p>Subtotal</p>
                <h4>{cart.length > 0 ? `Rs. ${calculateSubtotal() + shippingCost + (calculateSubtotal() * taxRate)}` : ''}</h4>
              </div>
            </div>
            <hr />
            <div className="cart-buttons">
              <Link to="/cart"><button onClick={toggleCartPopup}>Cart</button></Link>
              <Link to="/checkout"><button onClick={toggleCartPopup}>Checkout</button></Link>
              <Link to="/product-comparison"><button onClick={toggleCartPopup}>Comparison</button></Link>
            </div>
          </div>
        </section>
      )}

      {showWishPopup && (
        <section className="wishlist-main">
          <div className="wishlist-container">
            <div className="wishlist-header">
              <h2>Wishlist</h2>
              <RiCloseLine style={{ fontSize: '2.5rem', cursor: 'pointer' }} onClick={toggleWishPopup} />
            </div>
            <div className="wishlist-glance">
              {cart.map((item, index) => (
                <div key={index} className="wishlist-content">
                  <img src={item.Image} alt="product" />
                  <h4>{item.Heading}</h4>
                  <p>{item.SP}</p>
                  <RiCloseCircleFill style={{ fontSize: '1.5rem' }} onClick={() => handleRemoveFromCart(index)} />
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
