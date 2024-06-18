import React from 'react';
import logo from "./../assets/logo.png";
import "./Cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';

const Cart = ({ cart }) => {
    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.SP, 0);
    };

    return (
        <section className="cart-main">
            <Navbar />
            <div className="cart-container">
                <div className="cart-header">
                    <img src={logo} alt="" />
                    <h2>Cart
                        <p>Home<MdKeyboardArrowRight />Cart</p>
                    </h2>
                </div>
                <div className="cart-overview">
                    <div className="cart-review">
                        <h4>Product</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Subtotal</h4>
                    </div>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <div>{item.Heading}</div>
                            <div>Rs. {item.SP}</div>
                            <div>1</div>
                            <div>Rs. {item.SP}</div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <div className="total-header">
                            <h2>Cart Totals</h2>
                        </div>
                        <div className="total-content">
                            <h4>Subtotal</h4>
                            <p>Rs. {calculateSubtotal()}</p>
                        </div>
                        <div className="total-content">
                            <h4>Total</h4>
                            <p>Rs. {calculateSubtotal()}</p>
                        </div>
                        <div className="checkout-btn">
                            <Link to="/Checkout"><button>Checkout</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </section>
    );
};

export default Cart;
