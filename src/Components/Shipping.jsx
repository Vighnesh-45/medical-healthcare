import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Shipping.css";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';

const Shipping = ({ cart, currentStep, selectedIds, tax, shippingcost }) => {
    const [counts, setCounts] = useState({});
    const [orderDetails, setOrderDetails] = useState([0]);

    useEffect(() => {
        console.log(cart);
        if (!selectedIds || selectedIds.length === 0) {
            return; // Exit early if selectedIds is not defined or empty
        }

        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`https://api-k7vh.onrender.com/medical/medicine/all?id=${selectedIds.join(',')}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched order details:', data); // Log the fetched data for debugging
                    setOrderDetails(data); // Assuming data structure matches what you expect
                } else {
                    console.error('Failed to fetch order details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching order details:', error);
            }
        };

        fetchOrderDetails();
    }, [selectedIds]);

    const increment = (index) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [index]: (prevCounts[index] || 1) + 1
        }));
    };

    const decrement = (index) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [index]: prevCounts[index] > 1 ? prevCounts[index] - 1 : 1
        }));
    };

    const shippingCost = 40;

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
                            <div className="payment-btn">
                                <Link to="/Shop"><button>Cancel Order</button></Link>
                                <Link to="/"><button>Payment</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="shipping-summary">
                        <h3>Order Summary</h3>
                        {cart.map((item, index) => (
                            <div key={index} className="summary-card">
                                <div className="card-one">
                                    <img src={item.Image} alt="" />
                                </div>
                                <div className="summary-content">
                                    <div className="summmary-content-left">
                                        <h4>{item.Heading}</h4>
                                        <p>Subtotal</p>
                                        <p>Tax</p>
                                        <p>Shipping</p>
                                        <h4>Total</h4>
                                    </div>
                                    <div className="summmary-content-right">
                                        <div className="counter">
                                            <button className="button decrement" onClick={() => decrement(index)}>-</button>
                                            <span className="count">{counts[index] || 1}</span>
                                            <button className="button increment" onClick={() => increment(index)}>+</button>
                                        </div>
                                        <h4>{item.SP * (counts[index] || 1)}</h4>
                                        <p>{tax}</p>
                                        <p>{shippingCost}</p>
                                        <h4>{item.SP * (counts[index] || 1) + shippingCost}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </section>
    );
};

export default Shipping;
