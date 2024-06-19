import React from 'react'
import "./Profile.css"
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import Advertise from './Layout/Advertise';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { HiClipboardDocumentList } from "react-icons/hi2";




const Profile = () => {
    return (
        <section className="profile-main">
            <Navbar />
            <div className="profile-container">
                <div className="profile-header">
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

                        <div className="user-name">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="mobile-number">
                            <div className="number-one">
                                <label for="mobile">Mobile Number:</label>
                                <input type="tel" id="mobile" name="mobile" />
                            </div>
                            <div className="number-two">
                                <label for="altmobile">Alternate Mobile Number:</label>
                                <input type="tel" id="altmobile" name="altmobile" />
                            </div>
                        </div>
                        <div className="user-address">
                            <div className="address-one">
                                <label for="mobile">Address Line 1</label>
                                <input type="text" id="address" name="address" />
                            </div>
                            <div className="address-two">
                                <label for="altmobile">Alternate Address</label>
                                <input type="text" id="altadd" name="altadd" />
                            </div>
                        </div>
                        <div className="user-landmark">
                            <label for="name">Landmark (Optional)</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="pin-city">
                            <div className="pin">
                                <label for="pincode">Pincode</label>
                                <input type="text" id="pin" name="pin" />
                            </div>
                            <div className="city">
                                <label for="altmobile">City</label>
                                <input type="text" id="city" name="city" />
                            </div>
                        </div>
                        <div className="state-tag">
                            <div className="state">
                                <label for="state">State</label>
                                <input type="text" id="state" name="state" />
                            </div>
                            <div className="tag">
                                <label htmlFor="">Tag</label>
                                <button>Home</button>
                                <button>Work</button>
                                <button>Other</button>
                            </div>
                        </div>
                        <div className="default-address">
                            <input type="checkbox" />
                            <p>Use this as my default shipping address</p>
                        </div>
                    </div>
                </div>
            </div>
            <Advertise />
            <Footer />
        </section>
    )
}

export default Profile