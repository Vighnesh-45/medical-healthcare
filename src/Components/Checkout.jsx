import React, { useState } from 'react';
import "./Checkout.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import aspirin from "./../assets/aspirin.png"
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Advertise from './Layout/Advertise';


const Checkout = ({ currentStep }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <section className="checkout-main">
            {/* <Navbar/> */}
            <div className="checkout-container">
                <div className="checkout-header">
                    <h2>Checkout</h2>
                    <p>Home <MdKeyboardArrowRight />Checkout</p>
                </div>
                <div className="checkout-cards">
                    <div className="checkout-details">
                        <div className="progress-steps">
                            <div className={`step ${currentStep >= 1 ? 'completed' : ''}`}>
                                <div className="circle">✔</div>
                                <span>Account</span>
                            </div>
                            <div className={`step ${currentStep >= 2 ? 'completed' : ''}`}>
                                <div className="circle">✔</div>
                                <span>Shipping</span>
                            </div>
                            <div className={`step ${currentStep >= 3 ? 'completed' : ''}`}>
                                <div className="circle">✔</div>
                                <span>Payment</span>
                            </div>
                        </div>
                        <div className="detail-header">
                            <h3>Account Details</h3>
                        </div>
                        <div className="checkout-form">
                            <form action="">
                                <label htmlFor="">Email Address</label>
                                <input type="email" />
                                <label htmlFor="">Password</label>
                                <input type="text" />
                            </form>
                            <div className="checkout-btn">
                                <button>Register for Account</button>
                                <button className='login-btn'>Login</button>
                            </div>
                            <div className="shipping-btn">
                                <button>Cancel Order</button>
                                <button>Shipping Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-card">
                            <div className="card-one">
                                <img src={aspirin} alt="" />
                            </div>
                        </div>
                        <div className="summary-content">
                            <div className="summmary-content-left">
                                <h4>Pudin Hara</h4>
                                {/* <h4>250.00</h4> */}
                                <p>Subtotal</p>
                                <p>Tax</p>
                                <p>Shipping</p>
                                <h4>Total</h4>
                            </div>
                            <div className="summmary-content-right">
                                <div className="counter">
                                    <button className="button decrement" onClick={decrement}>-</button>
                                    <span className="count">{count}</span>
                                    <button className="button increment" onClick={increment}>+</button>
                                </div>
                                <h4>250.00</h4>
                                <p>8.00</p>
                                <p>Free</p>
                                <h4>258.00</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Advertise/> */}
            {/* <Footer/> */}
        </section>
    )
}

export default Checkout