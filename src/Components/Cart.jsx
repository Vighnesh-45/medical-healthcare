import React from 'react';
import { useState } from 'react';
import logo from "./../assets/logo.png";
import "./Cart.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';

const Cart = ({ cart }) => {
    const navigate = useNavigate();
    const [selectedIds, setSelectedIds] = useState([]);

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + item.SP, 0);
    };

    const handleCheckout = () => {
        const ids = cart.map(item => item.id); // Adjust 'id' to your actual unique identifier

        // Set selectedIds state to pass it to the Shipping page
        setSelectedIds(ids);

        // Navigate to the Shipping page with selected IDs
        navigate('/Shipping', { state: { selectedIds: ids } });
    };

    return (
        <section className="cart-main">
            {/* <Navbar /> */}
            <div className="cart-container">
                <div className="cart-header">
                    <img src={logo} alt="" />
                    <h2>Cart
                        <p>Home<MdKeyboardArrowRight />Cart</p>
                    </h2>
                </div>
                <div className="cart-overview">
                    <div className="cart-left">
                        <div className="cart-review">
                            <h4>Product</h4>
                            <h4>Price</h4>
                            <h4>Quantity</h4>
                            <h4>Subtotal</h4>
                        </div>
                        {cart.map((item, index) => (
                            <div key={index} className="cart-item">
                                <p>{item.Heading}</p>
                                <p>Rs. {item.SP}</p>
                                <p>1</p>
                                <p>Rs. {item.SP}</p>
                            </div>
                        ))}
                    </div>
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
                            <button onClick={handleCheckout}>Checkout</button>
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