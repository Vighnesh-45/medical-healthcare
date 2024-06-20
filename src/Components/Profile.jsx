import React, { useState } from 'react';
import "./Profile.css";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise'; 
import logo from "./../assets/logo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        altmobile: '',
        address: '',
        altadd: '',
        landmark: '',
        pin: '',
        city: '',
        state: ''
    });
    const [errors, setErrors] = useState({});

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

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Perform the form submission or other logic here
            console.log('Form submitted successfully:', formData);
        }
    };

    return (
        <section className="profile-main">
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
                    <img src={logo} alt="" />
                    <h2>Profile
                        <p>Home<MdKeyboardArrowRight />Profile</p>
                    </h2>
                </div>
                <div className="profile-card">
                    <div className="profile-sidebar">
                        <div className="profile-info">
                            <h2>Joe Don</h2>
                            <p>ICM4125698</p>
                        </div>
                        <div className="sidebar-feature">
                            <h2><IoIosNotifications />&nbsp; Notifications</h2>
                            <h2><FaHeart />&nbsp; Wishlist</h2>
                            <div className="sidebar-order">
                                <h2><HiClipboardDocumentList />&nbsp; Orders</h2>
                                <ul>
                                    <li>Order History</li>
                                    <li>Return/Refund Tracker</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="profile-address">
                        <h2>Add Address</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="user-name">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                            </div>
                            <div className="mobile-number">
                                <div className="number-one">
                                    <label htmlFor="mobile">Mobile Number:</label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        pattern="\d*"
                                        maxLength="10"
                                    />
                                    {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
                                </div>
                                <div className="number-two">
                                    <label htmlFor="altmobile">Alternate Mobile Number:</label>
                                    <input
                                        type="tel"
                                        id="altmobile"
                                        name="altmobile"
                                        value={formData.altmobile}
                                        onChange={handleInputChange}
                                        pattern="\d*"
                                        maxLength="10"
                                    />
                                    {errors.altmobile && <p style={{ color: 'red' }}>{errors.altmobile}</p>}
                                </div>
                            </div>
                            <div className="user-address">
                                <div className="address-one">
                                    <label htmlFor="address">Address Line 1</label>
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                    />
                                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                                </div>
                                <div className="address-two">
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
                                <div className="state">
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
                                <div className="tag">
                                    <label htmlFor="tag">Tag</label>
                                    <button type="button">Home</button>
                                    <button type="button">Work</button>
                                    <button type="button">Other</button>
                                </div>
                            </div>
                            <div className="default-address">
                                <input type="checkbox" id="default-address" name="default-address" />
                                <p>Use this as my default shipping address</p>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </section>
    );
};

export default Profile;
