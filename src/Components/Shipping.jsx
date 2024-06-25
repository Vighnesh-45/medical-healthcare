import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Shipping.css";
import Footer from './Layout/Footer';

const Shipping = ({ cart, currentStep, selectedIds, tax, shippingCost }) => {
    const [counts, setCounts] = useState({});
    const [orderDetails, setOrderDetails] = useState([]);
    const [savedAddress, setSavedAddress] = useState('');
    const [addressLine, setAddressLine] = useState('');
    const [streetName, setStreetName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [shippingMode, setShippingMode] = useState('');

    useEffect(() => {
        if (!selectedIds || selectedIds.length === 0) {
            return;
        }

        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`https://api-k7vh.onrender.com/medical/medicine/all?id=${selectedIds.join(',')}`);
                if (response.ok) {
                    const data = await response.json();
                    setOrderDetails(data);
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

    const handleSubmit = async () => {
        const formData = {
            savedAddress,
            addressLine,
            streetName,
            postcode,
            shippingMode,
            cart,
            counts,
        };

        try {
            const response = await fetch('https://api-k7vh.onrender.com/medical/response/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Form submitted successfully:', data);
                window.alert('Form submitted successfully');
                // Navigate to payment page or show success message
            } else {
                const errorMessage = await response.text();
                console.error('Failed to submit form:', errorMessage);
                window.alert(`Failed to submit form: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            window.alert(`Error submitting form: ${error.message}`);
        }
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
                        <div className="card-left">
                            <h2>Shipping Details</h2>
                            <div className="saved-address">
                                <label>Use Saved Address</label>
                                <select name="Address" value={savedAddress} onChange={(e) => setSavedAddress(e.target.value)}>
                                    <option value="add1">123, Avenue</option>
                                    <option value="add2">456, Electric Avenue</option>
                                </select>
                            </div>
                            <div className="shipping-address">
                                <label>First line of Address</label>
                                <input type="text" placeholder="Enter your address" value={addressLine} onChange={(e) => setAddressLine(e.target.value)} />
                                <label>Street Name</label>
                                <input type="text" placeholder="123 Electric Avenue" value={streetName} onChange={(e) => setStreetName(e.target.value)} />
                            </div>
                            <div className="shipping-info">
                                <div className="shipping-post">
                                    <label>Postcode</label>
                                    <input type="text" placeholder="ABC-123" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
                                </div>
                                <div className="shipping-mode">
                                    <label>Select Shipping</label>
                                    <select name="Mode of Shipping" value={shippingMode} onChange={(e) => setShippingMode(e.target.value)}>
                                        <option value="cod">Cash on Delivery</option>
                                        <option value="online">Online Payment</option>
                                    </select>
                                </div>
                            </div>
                            <div className="payment-btn">
                                <Link to="/Shop"><button>Cancel Order</button></Link>
                                <button onClick={handleSubmit}>Payment</button>
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
            <Footer />
        </section>
    );
};

export default Shipping;
