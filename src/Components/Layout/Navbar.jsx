import React, { useState, useEffect } from "react";
import "./Navbar.css"
import "../../Components/ShoppingCart.css"
// import logo from "./../../assets/codifylogo.png"
import person from "./../../assets/person.png"
import search from "./../../assets/search.png"
import heart from "./../../assets/heart.png"
import cart from "./../../assets/cart.png"
import { RiCloseLine } from "react-icons/ri";
import dabur from "./../../assets/dabur.png"
import { RiCloseCircleFill } from "react-icons/ri";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const onButtonClick = () => {
    setShowPopup(!showPopup);
}
  return (
    <>
    <section className="navbar-main">
      <div className="navbar-container">
        <div className="logo">
          {/* <img src= {logo} alt="" /> */}
        </div>
        <nav>
          <ul className="navbar-list">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="nav-right">
          <img src={person} alt="" />
          <img src={search} alt="" />
          <img src={heart} alt="" />
          <img src={cart} alt="" onClick={onButtonClick}/>
        </div>
      </div>
    </section>
    {showPopup ? <>
          <section className="shoppingcart-main">
            <div className="shoppingcart-container">
              <div className="shoppingcart-header">
                <h2>Shopping Cart</h2>
                <RiCloseLine style={{ fontSize: '2.5rem' }} onClick={onButtonClick} />
              </div>
              <div className="cart-summary">
                <div className="summary-img">
                  <img src={dabur} alt="" />
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
                  <RiCloseCircleFill style={{ fontSize: '1.5rem' }}/>
                </div>
              </div>
              <div className="cart-summary">
                <div className="summary-img">
                  <img src={dabur} alt="" />
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
                  <RiCloseCircleFill style={{ fontSize: '1.5rem' }}/>
                </div>
              </div>
              <div className="cart-subtotal">
                <p>Subtotal</p>
                <h4>Rs. 520.00</h4>
              </div>
              <hr />
              <div className="cart-buttons">
                <button>Cart</button>
                <button>Checkout</button>
                <button>Comparison</button>
              </div>
            </div>
          </section>
        </> : null}
    </>
  )
}

export default Navbar