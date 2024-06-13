import React from 'react'
import "./Cart.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';


const Cart = () => {
    return (
        <section className="cart-main">
            <Navbar />
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Cart
                        <p>Home<MdKeyboardArrowRight />Cart</p>
                    </h2>
                </div>
                <div className="cart-overview">
                    <div className="cart-review">
                        <h4>Product</h4>
                        <h4>Price</h4>
                        <h4>Quantiy</h4>
                        <h4>Subtotal</h4>
                    </div>
                    <div className="cart-total">
                        <div className="total-header">
                            <h2>Cart Totals</h2>
                        </div>
                        <div className="total-content">
                            <h4>Subtotal</h4>
                            <p>Rs. 250</p>
                        </div>
                        <div className="total-content">
                            <h4>Total</h4>
                            <p>Rs. 250</p>
                        </div>
                        <div className="checkout-btn">
                            <button><Link to="/Checkout">Checkout</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </section>
    )
}

export default Cart