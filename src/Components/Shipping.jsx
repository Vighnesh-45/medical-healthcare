import React, { useState } from 'react';
import "./Shipping.css"
import aspirin from "./../assets/aspirin.png"

const Shipping = ({ currentStep }) => {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <section className="shipping-main">
            <div className="shipping-container">
                <div className="shipping-cards">
                    <div className="shipping-details">
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
                            <h3>Shipping Details</h3>
                        </div>
                        <div className="shipping-form">
                            <form action="">
                                <label htmlFor="">Enter saved Adress
                                    <div className="dropdown-container">
                                        <select className="dropdown">
                                            <option>123, Electric avenue</option>
                                            <option>Another address</option>
                                            <option>Yet another address</option>
                                        </select>
                                    </div></label>
                                <label htmlFor="">First line of Address</label>
                                <input type="email" />
                                <label htmlFor="">Street Name</label>
                                <input type="text" />
                                <div className="shipping-extra-details">
                                    <div className="shipping-detail-left">
                                    <label htmlFor="">Street Name</label>
                                    <input type="text" />
                                    </div>
                                    <label htmlFor="">Enter saved Adress
                                        <div className="dropdown-container">
                                            <select className="dropdown">
                                                <option>123, Electric avenue</option>
                                                <option>Another address</option>
                                                <option>Yet another address</option>
                                            </select>
                                        </div></label>
                                </div>
                            </form>
                            <hr />
                            <div className="checkout-btn">
                                <button>Cancel Order</button>
                                <button className='login-btn'>Payment</button>
                            </div>
                        </div>
                    </div>
                    <div className="shipping-summary">
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
        </section>
    )
}

export default Shipping