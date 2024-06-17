import React, { useState } from 'react';
import "./Shipping.css"
import aspirin from "./../assets/aspirin.png"

const Shipping = ({ currentStep }) => {
    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => count !== 1 ? setCount(count - 1) : null
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
                        <div className="card-left">
                            <h2>Shipping Details</h2>
                            <div className="saved-address">
                                <label htmlFor="">Use Saved Address</label>
                                <select name="Address" id="add">
                                    <option value="add1">123, Avenue</option>
                                    <option value="saab">456, electric avenue</option>
                                </select>
                            </div>
                            <div className="shipping-address">
                                <label htmlFor="">First line of Address</label>
                                <input type="text" placeholder="Enter your address" />
                                <label htmlFor="">Street Name</label>
                                <input type="text" placeholder="123 Electric Avenue" />
                            </div>
                            <div className="shipping-info">
                                <div className="shipping-post">
                                    <label htmlFor="">Postcode</label>
                                    <input type="text" placeholder='ABC-123' />
                                </div>
                                <div className="shipping-mode">
                                    <label htmlFor="">Select Shipping</label>
                                    <select name="Mode of Shipping" id="delivery">
                                        <option value="add1">Cash on Delivery</option>
                                        <option value="saab">Online Payment</option>
                                    </select>
                                </div>
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