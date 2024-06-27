import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Shipping.css";
import Footer from './Layout/Footer';
import "./Profile.css";
const Shipping = ({ cart, currentStep, selectedIds, tax, shippingCost }) => {
    const [counts, setCounts] = useState({});
    const [orderDetails, setOrderDetails] = useState([]);
    const [savedAddress, setSavedAddress] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        altmobile: '',
        address: '',
        altadd: '',
        landmark: '',
        pin: '',
        city: '',
        state: '',
        tag: '',
        shippingmode: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!selectedIds || selectedIds.length === 0) {
            return;
        }

        const fetchOrderDetails = async () => {
            try {
                const response = await fetch(`https://api-5e1h.onrender.com/medical/medicine/all?id=${selectedIds.join(',')}`);
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mobile' || name === 'altmobile' || name === 'pin') {
            if (/^\d*$/.test(value)) {
                setFormData({
                    ...formData,
                    [name]: value
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
        if (!formData.altmobile) newErrors.altmobile = "Alternate mobile number is required.";
        if (!formData.address) newErrors.address = "Address Line 1 is required.";
        if (!formData.altadd) newErrors.altadd = "Alternate Address is required.";
        if (!formData.pin) newErrors.pin = "Pincode is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.state) newErrors.state = "State is required.";
        if (!formData.tag) newErrors.tag = "tag is required.";
        if (!formData.shippingmode) newErrors.shippingmode = "shippingmode is required.";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Perform the form submission or other logic here
            console.log('Form submitted successfully:', formData);
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
                            <form onSubmit={handleSubmit} className='shipping-address'>
                                <div className="user-address">

                                    <label htmlFor="address">Address Line 1</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                                    {/* </div> */}

                                    <label htmlFor="altadd">Alternate Address</label>
                                    <input
                                        type="text"
                                        id="altadd"
                                        name="altadd"
                                        value={formData.altadd}
                                        onChange={handleInputChange}
                                    />
                                    {errors.altadd && <p style={{ color: 'red' }}>{errors.altadd}</p>}

                                </div>
                                <div className="user-landmark">
                                    <label htmlFor="landmark">Landmark (Optional)</label>
                                    <input
                                        type="text"
                                        id="landmark"
                                        name="landmark"
                                        value={formData.landmark}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="pin-city">
                                    <div className="pin">
                                        <label htmlFor="pin">Pincode</label>
                                        <input
                                            type="text"
                                            id="pin"
                                            name="pin"
                                            value={formData.pin}
                                            onChange={handleInputChange}
                                            pattern="\d*"
                                            maxLength="6"
                                        />
                                        {errors.pin && <p style={{ color: 'red' }}>{errors.pin}</p>}
                                    </div>
                                    <div className="city">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                        />
                                        {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                                    </div>
                                </div>
                                <div className="state-tag">

                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                    />
                                    {errors.state && <p style={{ color: 'red' }}>{errors.state}</p>}

                                </div>
                                <div className="shipping-mode">
                                    <label>Select Shipping</label>
                                    <select name="ShippingMode" value={formData.ShippingMode} onChange={handleInputChange}>
                                        <option value="">Select</option>
                                        <option value="cod">Cash on Delivery</option>
                                        <option value="online">Online Payment</option>
                                    </select>
                                    {errors.ShippingMode && <p className="error-message">{errors.ShippingMode}</p>}
                                </div>

                                <div className="default-address">
                                    <input type="checkbox" id="default-address" name="default-address" />
                                    <p>Use this as my default shipping address</p>
                                </div>

                            </form>


                            <div className="payment-btn">
                                <Link to="/Shop"><button>Cancel Order</button></Link>
                                <button className='payment' onClick={handleSubmit}>Payment</button>
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
        </section >
    );
};

export default Shipping;
